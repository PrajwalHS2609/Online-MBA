// import BlogPage from "../../components/BlogPage/BlogPage";
// import AboutUsHeader from "./../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import "@/components/Styles.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { client } from "@/sanity/client";
import Image from "next/image";
import ContentHeader from './../../components/ContentHeader/ContentHeader';
import blog from "./../../Images/blog.jpg"
export const revalidate = 0;

const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...100]{
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
export default async function Blog() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <div>
      <ContentHeader title="Our Blog" img={blog} />
      <div className="blogPage-container">
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
    </div>
  );
}
