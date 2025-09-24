"use  client"
import React from "react";
import "./../Styles.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { client } from '@/sanity/client';
import Image from "next/image";

const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    description,
    mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }
  }`;
export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);
  
  // const card = [
  //   {
  //     id: 1,
  //     title: "5 Essential Skills Every Digital Marketer Should Master",
  //     link: "/",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Graphic Design Trends Shaping Visual Communication",
  //     link: "",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Navigating the Data Science Job Market",
  //     link: "",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog3.jpg",
  //   },
  // ];
  return (
    <div className="blogPage-container">
      {/* <div className="blogPage-content">
        <div className="blogPage-heading">
          <h6>Our Blog</h6>
          <h2>
            Read Our Latest <span>Blog</span>
          </h2>
        </div>
        <div className="blogPage-heading">
          <Link href="/">
            {" "}
            <button>
              View All Blog <FaArrowRight className="blogPage-HeadingIcon" />
            </button>
          </Link>
        </div>
      </div> */}
      <div className="blogPage-content">
        {posts.map((post) => (
          <div className="blogPage-Card" key={post._id}>
            <div className="blogPage-ImgContainer">
              {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={550}
                  height={310}
                  className="rounded-md object-cover aspect-video"
                />
              )}{" "}
            </div>
            {/* <div className="blogPage-wrapper">
            <div className="blogPage-item"></div>
          </div> */}

            <div className="blogPage-wrapper">
              <h3>{post.title}</h3>
            </div>
            <div className="blogPage-wrapper">
              <Link href={`/${post.slug.current}`}>
                {" "}
                <button>
                  READ MORE <FaArrowRight className="blogPage-ReadIcon" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
