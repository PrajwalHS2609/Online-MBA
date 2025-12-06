"use client";
import React, { useState } from "react";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import type { PortableTextBlock } from "@portabletext/types";
import HomeSpecialization from "../HomePage/HomeSpecialization/HomeSpecialization";
import UniversitiesMarquee from "../HomePage/UniversitiesMarquee/UniversitiesMarquee";
import HomeWhyMain from "../HomePage/HomeWhy/HomeWhyMain";
import ContentHeader from "../ContentHeader/ContentHeader";
import UniversitiesFees from "../HomePage/UniversitiesFees/UniversitiesFees";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
  headers?: string[];
  rows?: { cells: string[] }[];
};
export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};
export type MbaCourseContentType = {
  _id: string;
  title: string;
  slug: string;
  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  customTable?: CustomTable;
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
};

export default function MbaCourseContent({
  content,
}: {
  content: MbaCourseContentType;
}) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  return (
    <div className="main-container service-wrapper1">
      {imageUrl && <ContentHeader title={content.title} img={imageUrl} />}

      <h1>{content.title}</h1>
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
                <a href={img.link} target="_blank" rel="noopener noreferrer">
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
      {content.body1 && (
        <div className="slugContent-wrapper">
          <div className="slugContent-container">
            <PortableText
              value={content.body1}
              components={portableTextComponents}
            />
          </div>
        </div>
      )}

      <div className="head-container">
        <HomeSpecialization />
        <UniversitiesMarquee />
        <UniversitiesFees />
        <HomeWhyMain />

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
      </div>

      {content.body2 && (
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
                      {content.customTable.headers?.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.customTable.rows?.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.cells.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* {Array.isArray(content?.faq) && content.faq.length > 0 && (
            <FaqComponent faqs={content.faq} />
          )} */}
        </div>
      )}
    </div>
  );
}
