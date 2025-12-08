"use client";
import { PortableText, PortableTextBlock } from "next-sanity";
import Image from "next/image";
import { portableTextComponents } from "../PortableTextComponents";
import "@/components/Styles.css";
import BlogSidebar from "../BlogPage/BlogSidebar/BlogSidebar";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type PostContentType = {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  publishedAt?: string;
  faq?: FaqItem[];
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
};
export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};
export default function PostContent({ content }: { content: PostContentType }) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  return (
    <div className="blog-container">
      <div className="blog-wrapper1">
        {imageUrl && (
          <Image src={imageUrl} alt={content.title} width={550} height={310} />
        )}

        <div className="blogHead-content">
          <h1>{content.title}</h1>
          {content.publishedAt && (
            <p className="postPublished-date">
              📅{" "}
              {new Date(content.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          {/* ✅ Carousel Section */}
          {content.carouselBlock?.images?.length ? (
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className="carouselContainer"
            >
              {content.carouselBlock.images.map((img, i) => (
                <Carousel.Item key={i} className="carouselItem">
                  {img.link ? (
                    <a
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={img.asset?.url}
                        alt={img.alt || `Slide ${i + 1}`}
                        className="d-block w-100 rounded"
                      />
                    </a>
                  ) : (
                    <img
                      src={img.asset?.url}
                      alt={img.alt || `Slide ${i + 1}`}
                      className="d-block w-100 rounded"
                    />
                  )}
                  {img.caption && (
                    <Carousel.Caption>
                      <h3>{img.caption}</h3>
                    </Carousel.Caption>
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          ) : null}
          <PortableText
            value={content.body}
            components={portableTextComponents}
          />
        </div>

        {youtubeUrl && (
          <div className="youtube-container">
            <iframe
              width="100%"
              height="500"
              src={
                youtubeUrl.includes("youtu.be")
                  ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                  : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
              }
              title={content.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {/* 
        {Array.isArray(content?.faq) && content.faq.length > 0 && (
          <FaqComponent faqs={content.faq} />
        )} */}
      </div>

      <div className="blog-wrapper2">
        <BlogSidebar />
      </div>
    </div>
  );
}
