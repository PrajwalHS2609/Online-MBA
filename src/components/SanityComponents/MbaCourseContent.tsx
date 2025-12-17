"use client";
import React, { useState } from "react";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import type { PortableTextBlock } from "@portabletext/types";
import ContentHeader from "../ContentHeader/ContentHeader";
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
export type TableContentItem = {
  title: string;
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
  tableOfContent?: TableContentItem[];
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
    <div className="main-container mba-wrapper1">
      {imageUrl && <ContentHeader title={content.title} img={imageUrl} />}

      <div className="componentDivider-container">
        <div className="componentDivider-content">
          {content.tableOfContent?.length && (
            <div className="tableOfContent-container">
              <h3>Table of Content</h3>
              <ul>
                {content.tableOfContent.map((item, i) => (
                  <li key={i}>📖 {item.title}</li>
                ))}
              </ul>
            </div>
          )}
          <h1 className="mbaCourse-head">{content.title}</h1>
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
          {content.body1 && (
            <div className="mbaCourse-wrapper">
              <div className="mbaCourse-container">
                <PortableText
                  value={content.body1}
                  components={portableTextComponents}
                />
              </div>
            </div>
          )}

          {content.body2 && (
            <div className="mbaCourse-wrapper">
              <div className="mbaCourse-container">
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
        <div className="componentDivider-content">
          <div className="componentDivider-item">
            <div className="componentDivider-formContainer">
              <div className="componentDivider-formContent">
                <h2>Get in Touch</h2>
                <form className="componentDivider-form">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />

                  <select name="course" id="" required>
                    <option value="">Select Course</option>
                    <option value="MBA (General Management)">
                      MBA (General Management)
                    </option>
                    <option value="MBA (Finance)">MBA (Finance)</option>
                    <option value="MBA (Marketing)">MBA (Marketing)</option>
                    <option value="MBA (HR Management)">
                      MBA (HR Management)
                    </option>
                    <option value="MBA (Information Technology)">
                      MBA (Information Technology)
                    </option>
                    <option value="MBA (Supply Chain Management)">
                      MBA (Supply Chain Management)
                    </option>
                    <option value="MBA (Data Analytics)">
                      MBA (Data Analytics)
                    </option>
                    <option value="MBA (Business Analytics)">
                      MBA (Business Analytics)
                    </option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                  ></textarea>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
