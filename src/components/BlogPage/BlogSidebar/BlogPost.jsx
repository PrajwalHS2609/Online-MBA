import React from "react";
import Link from "next/link";
import { client } from "@/sanity/client";
import "./BlogSidebar.css";

import Image from "next/image";
export const revalidate = 0;

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...2]{
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
export default async function BlogPost() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <div className="blogPost-container">
      <ul>
        <h2>Recent Posts</h2>
        {posts.map((post) => (
          <Link href={`/${post.slug.current}`} key={post._id}>
            <ul>
              <li>
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={550}
                    height={310}
                    className="rounded-md object-cover aspect-video"
                  />
                )}
                <h4>{post.title}</h4>
              </li>
            </ul>
          </Link>
        ))}
      </ul>
    </div>
  );
}
