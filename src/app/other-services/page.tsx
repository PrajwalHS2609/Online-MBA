import { client } from "@/sanity/client";
import Link from "next/link";
import "@/components/Styles.css";
import { SanityDocument } from "next-sanity";

// 🔥 Force dynamic rendering on every request (not cached)
export const dynamic = "force-dynamic";

const SERVICE_QUERY = `*[_type == "ServiceCategory"] |order(publishedAt desc)[0...100]{
  _id,
  title,
  slug,
}`;

export default async function OtherServices() {
  const services = await client.fetch<SanityDocument[]>(SERVICE_QUERY, {}, {
    cache: "no-store", // also tells Next.js not to cache the fetch
  });

  return (
    <div className="head-container">
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <Link href={`/${service.slug.current}`}>{service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}