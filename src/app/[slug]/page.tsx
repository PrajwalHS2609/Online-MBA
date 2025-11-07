import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import PostContent, { PostContentType } from "@/components/SanityComponents/Post";
import ServiceContent, { ServiceContentType } from "@/components/SanityComponents/ServiceContent";
import MbaCourseContent, { MbaCourseContentType } from "@/components/SanityComponents/MbaCourseContent";


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, body, mainImage { asset->{ url } }, youtubeVideoUrl, faq[] { question, answer }}`;
const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{_id, title, slug, body1, body2, mainImage { asset->{ url } }, youtubeVideoUrl, faq[] { question, answer }, customTable{title, headers, rows[] {cells}}}`;
const MBA_QUERY = `*[_type == "mbaCourse" && slug.current == $slug][0]{_id, title, slug, body1, body2, mainImage { asset->{ url } }, youtubeVideoUrl, faq[] { question, answer }, customTable{title, headers, rows[] {cells}}}`;

export const revalidate = 0;

type SlugParams = { slug: string };

export default async function SlugPage({
  params: paramsPromise,
}: {
  params: Promise<SlugParams>;
}) {
  const { slug } = await paramsPromise;

  const post: PostContentType | null = await client.fetch<PostContentType>(
    POST_QUERY,
    { slug }
  );
  if (post) return <PostContent content={post} />;

  const service: ServiceContentType | null =
    await client.fetch<ServiceContentType>(SERVICE_QUERY, { slug });
  if (service) return <ServiceContent content={service} />;

  const mba: MbaCourseContentType | null =
    await client.fetch<MbaCourseContentType>(MBA_QUERY, { slug });
  if (mba) return <MbaCourseContent content={mba} />;
  notFound();
}
