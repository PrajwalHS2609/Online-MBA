import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

import PostContent, {
  PostContentType,
} from "@/components/SanityComponents/Post";
import ServiceContent, {
  ServiceContentType,
} from "@/components/SanityComponents/ServiceContent";
import MbaCourseContent, {
  MbaCourseContentType,
} from "@/components/SanityComponents/MbaCourseContent";

// =========================
// GROQ QUERIES
// =========================

const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, body,
    mainImage{ asset->{url} },
    youtubeVideoUrl,
    faq[]{ question, answer }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  }
}`;

const SERVICE_QUERY = `{
  "service": *[_type == "ServiceCategory" && slug.current == $slug][0]{
    _id, title, slug, body1, body2,
    mainImage{ asset->{url} },
    youtubeVideoUrl,
    faq[]{ question, answer },
   tableOfContent[]{
      title
    },
    customTable{ title, headers, rows[]{ cells } }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  },

}`;

const MBA_QUERY = `{
  "mba": *[_type == "mbaCourse" && slug.current == $slug][0]{
    _id, title, slug, body1, body2,
    mainImage{ asset->{url} },
    youtubeVideoUrl,
    faq[]{ question, answer },
    
    tableOfContent[]{
      title
    },
    customTable{ title, headers, rows[]{ cells } }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  }
}`;

export const revalidate = 0;

// =========================
// TYPES
// =========================

type SlugParams = { slug: string };

type CarouselImage = {
  alt?: string;
  caption?: string;
  link?: string;
  asset?: { url?: string };
};

type CarouselBlock = {
  title?: string;
  images?: CarouselImage[];
};

// =========================
// PAGE LOGIC
// =========================

export default async function SlugPage({
  params: paramsPromise,
}: {
  params: Promise<SlugParams>;
}) {
  const { slug } = await paramsPromise;

  // 1️⃣ POST
  const postData = await client.fetch<{
    post: PostContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(POST_QUERY, { slug });

  if (postData.post) {
    return (
      <PostContent
        content={{
          ...postData.post,
          carouselBlock: postData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // 2️⃣ SERVICE
  const serviceData = await client.fetch<{
    service: ServiceContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(SERVICE_QUERY, { slug });

  if (serviceData.service) {
    return (
      <ServiceContent
        content={{
          ...serviceData.service,
          carouselBlock: serviceData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // 3️⃣ MBA COURSE
  const mbaData = await client.fetch<{
    mba: MbaCourseContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(MBA_QUERY, { slug });

  if (mbaData.mba) {
    return (
      <MbaCourseContent
        content={{
          ...mbaData.mba,
          carouselBlock: mbaData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  return notFound();
}
