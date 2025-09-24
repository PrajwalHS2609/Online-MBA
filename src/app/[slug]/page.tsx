import React from "react";
import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { portableTextComponents } from "./../../components/PortableTextComponents";
import BlogSidebar from "./../../components/BlogPage/BlogSidebar/BlogSidebar";
import "@/components/Styles.css";
import ContentHeader from "./../../components/ContentHeader/ContentHeader";
import HomeSpecialization from "@/components/HomePage/HomeSpecialization/HomeSpecialization";
import UniversitiesMarquee from "@/components/HomePage/UniversitiesMarquee/UniversitiesMarquee";
import HomeWhyMain from "@/components/HomePage/HomeWhy/HomeWhyMain";

export const revalidate = 0;

// Queries for each type
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, body, metaTitle, metaDescription,
  mainImage { asset->{ url } },
  youtubeVideoUrl
}`;

const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{
  _id, title, slug, body1, body2, metaTitle, metaDescription,
  mainImage { asset->{ url } },
  youtubeVideoUrl,
  customTable { title, headers, rows[] { cells } }
}`;

const NEWS_QUERY = `*[_type == "news" && slug.current == $slug][0]{
  _id, title, slug, body, author, publishedAt, description, metaTitle, metaDescription,
  mainImage { asset->{ url } }
}`;

const MBA_COURSE_QUERY = `*[_type == "mbaCourse" && slug.current == $slug][0]{
  _id, title, slug, overview, metaTitle, metaDescription,
  mainImage { asset->{ url } },
  youtubeVideoUrl,
  customTable { title, headers, rows[] { cells } }
}`;

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const news =
    !post && !service ? await client.fetch(NEWS_QUERY, { slug }) : null;
  const mbaCourse =
    !post && !service && !news
      ? await client.fetch(MBA_COURSE_QUERY, { slug })
      : null;

  const content = post || service || news || mbaCourse;

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: content.metaTitle || content.title || "Default Title",
    description: content.metaDescription || "Default description.",
  };
}

// Main Slug Page
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Fetch all types
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
  const service = !post
    ? await client.fetch<SanityDocument>(SERVICE_QUERY, { slug })
    : null;
  const news =
    !post && !service
      ? await client.fetch<SanityDocument>(NEWS_QUERY, { slug })
      : null;
  const mbaCourse =
    !post && !service && !news
      ? await client.fetch<SanityDocument>(MBA_COURSE_QUERY, { slug })
      : null;

  const content = post || service || news || mbaCourse;
  if (!content) notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;
  const youtubeUrl = content?.youtubeVideoUrl || null;

  const isPost = !!post;
  const isService = !!service;
  const isNews = !!news;
  const isMBACourse = !!mbaCourse;

  // Body content
  const body = isService
    ? content?.body1 || content?.body2
    : content?.body || content?.overview || [];
  // const videoIndex = 2;

  return (
    <div className={isNews || isPost ? "blog-container" : "main-container"}>
      <div className={isNews || isPost ? "blog-wrapper1" : "service-wrapper1"}>
        {/* Main image */}
        {(isPost || isNews) && imageUrl && (
          <Image
            src={imageUrl}
            alt={content.title || "Content Image"}
            width={550}
            height={310}
          />
        )}

        {(isService || isMBACourse) && imageUrl && (
          <ContentHeader title={content.title} img={imageUrl} />
        )}

        {/* Title */}
        <h1>{content.title}</h1>

        {/* News meta */}
        {isNews && content.publishedAt && content.author && (
          <b className="published-date">
            Published on: {new Date(content.publishedAt).toLocaleDateString()}{" "}
            by {content.author}
          </b>
        )}

        {/* Main body */}
        <div
          className={isNews || isPost ? "blogHead-content" : "head-container"}
        >
          {Array.isArray(body) &&
            body.map((block, index) => (
              <React.Fragment key={`block-${index}`}>
                <PortableText
                  value={block}
                  components={portableTextComponents}
                />
              </React.Fragment>
            ))}
        </div>

        {/* Service specific */}
        {isService && (
          <>
            <div className="head-container">
              {youtubeUrl && (
                <div className="youtube-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${
                      youtubeUrl.includes("youtu.be")
                        ? youtubeUrl.split("/").pop()?.split("?")[0]
                        : youtubeUrl.split("v=")[1]
                    }`}
                    title={content.title || "YouTube Video"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
                <HomeSpecialization />
                <UniversitiesMarquee />
                <HomeWhyMain />
            </div>

            {Array.isArray(content.body2) && (
              <div className="slugContent-wrapper">
                <div className="slugContent-container">
                  <PortableText
                    value={content.body2}
                    components={portableTextComponents}
                  />
                  {content.customTable && (
                    <div className="custom-table">
                      {content.customTable.title && (
                        <h3>{content.customTable.title}</h3>
                      )}
                      <table>
                        <thead>
                          <tr>
                            {content.customTable.headers?.map(
                              (header: string, idx: number) => (
                                <th key={idx}>{header}</th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {content.customTable.rows?.map(
                            (row: { cells: string[] }, rowIndex: number) => (
                              <tr key={rowIndex}>
                                {row.cells.map((cell, cellIndex) => (
                                  <td key={cellIndex}>{cell}</td>
                                ))}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* MBA Course specific */}
        {isMBACourse && (
          <>
            {youtubeUrl && (
              <div className="youtube-container">
                <iframe
                  src={`https://www.youtube.com/embed/${
                    youtubeUrl.includes("youtu.be")
                      ? youtubeUrl.split("/").pop()?.split("?")[0]
                      : youtubeUrl.split("v=")[1]
                  }`}
                  title={content.title || "YouTube Video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {content.customTable && (
              <div className="custom-table">
                {content.customTable.title && (
                  <h2>{content.customTable.title}</h2>
                )}
                <table>
                  <thead>
                    <tr>
                      {content.customTable.headers?.map(
                        (header: string, idx: number) => (
                          <th key={idx}>{header}</th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {content.customTable.rows?.map(
                      (row: { cells: string[] }, rowIndex: number) => (
                        <tr key={rowIndex}>
                          {row.cells.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          <HomeSpecialization />
          <UniversitiesMarquee />
          <HomeWhyMain />
          </>
        )}

      </div>

      {/* Sidebar for blog/news */}
      {(isPost || isNews) && (
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      )}
    </div>
  );
}
