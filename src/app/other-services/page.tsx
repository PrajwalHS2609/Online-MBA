import { client } from "@/sanity/client";
import Link from "next/link";
import "@/components/Styles.css";
import { SanityDocument } from "next-sanity";

// 🔥 Force dynamic rendering on every request (not cached)
export const dynamic = "force-dynamic";

const SERVICE_QUERY = `*[_type == "ServiceCategory"] | order(publishedAt desc)[0...100]{
  _id,
  title,
  slug
}`;

const MBA_QUERY = `*[_type == "mbaCourse"] | order(_createdAt desc)[0...200]{
  _id,
  title,
  slug
}`;

export default async function OtherServices() {
  const services = await client.fetch<SanityDocument[]>(
    SERVICE_QUERY,
    {},
    {
      cache: "no-store",
    }
  );

  const mbaCourses = await client.fetch<SanityDocument[]>(
    MBA_QUERY,
    {},
    {
      cache: "no-store",
    }
  );

  return (
    <div className="head-container">
      <h2>Services</h2>

      <ul>
        {services.map((service) => {
          const slug = service?.slug?.current;
          if (!slug) return null; // Skip items missing slug

          return (
            <li key={service._id}>
              <Link href={`/${slug}`}>{service.title}</Link>
            </li>
          );
        })}
      </ul>

      {/* MBA COURSES */}
      <h2>MBA Courses</h2>

      <ul>
        {mbaCourses.map((course) => {
          const slug = course?.slug?.current;
          if (!slug) return null;

          return (
            <li key={course._id}>
              <Link href={`/${slug}`}>{course.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
