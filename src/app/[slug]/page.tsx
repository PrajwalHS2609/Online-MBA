import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import type { Metadata } from "next";

import PostContent, {
  PostContentType,
} from "@/components/SanityComponents/Post";
import ServiceContent, {
  ServiceContentType,
} from "@/components/SanityComponents/ServiceContent";
import MbaCourseContent, {
  MbaCourseContentType,
} from "@/components/SanityComponents/MbaCourseContent";
import BlogSidebar from "@/components/BlogPage/BlogSidebar/BlogSidebar";

// =========================
// GROQ QUERIES
// =========================

const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, metaTitle,metaDescription body,
    mainImage{ asset->{url} },
    publishedAt,
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
    _id, title, slug,metaTitle ,metaDescription,body1, body2,
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
    _id, title, slug,metaTitle,metaDescription, body1, body2,
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


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // 1️⃣ POST
  const postData = await client.fetch<{
    post: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(POST_QUERY, { slug });

  if (postData?.post) {
    return {
      title:
        postData.post.metaTitle ||
        postData.post.title ||
        "Prime Clean Blog",
      description:
        postData.post.metaDescription ||
        "Read expert blog articles from Prime Clean.",
    };
  }

  // 2️⃣ SERVICE
  const serviceData = await client.fetch<{
    service: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(SERVICE_QUERY, { slug });

  if (serviceData?.service) {
    return {
      title:
        serviceData.service.metaTitle ||
        serviceData.service.title ||
        "Prime Clean Services",
      description:
        serviceData.service.metaDescription ||
        "Professional services by Prime Clean.",
    };
  }

  // 3️⃣ MBA COURSE
  const mbaData = await client.fetch<{
    mba: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(MBA_QUERY, { slug });

  if (mbaData?.mba) {
    return {
      title:
        mbaData.mba.metaTitle ||
        mbaData.mba.title ||
        "MBA Courses",
      description:
        mbaData.mba.metaDescription ||
        "Explore MBA courses and career programs.",
    };
  }

  // 4️⃣ FALLBACK
  return {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  };
}


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
          <div className="blog-container">
        <PostContent
          content={{
            ...postData.post,
            carouselBlock: postData.carouselBlock ?? undefined,
          }}
        />
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      </div>
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
