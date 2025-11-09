import { PortableTextComponents, PortableTextBlock } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "@portabletext/react";
import "@/components/Styles.css";

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ✅ Define types
interface CustomTableRow {
  cells: string[];
}
interface CustomTableValue {
  title?: string;
  headers: string[];
  rows: CustomTableRow[];
}
interface AccordionBlockValue {
  title: string;
  content: PortableTextBlock[]; // ✅ Proper type instead of any[]
}

export const portableTextComponents: PortableTextComponents = {
  types: {
    // 🖼️ Image Renderer
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value).url();
      const href = value.link || null;

      return (
        <div className="portableImg">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                src={imageUrl}
                alt={value.alt || "img"}
                width={2000}
                height={1000}
                className="rounded-lg object-cover"
              />
            </a>
          ) : (
            <img
              src={imageUrl}
              alt={value.alt || "img"}
              width={1400}
              height={900}
              className="rounded-lg object-cover"
            />
          )}
        </div>
      );
    },

    // 📊 Custom Table Renderer
    customTable: ({ value }: { value: CustomTableValue }) => {
      if (!value?.rows || !value?.headers) return null;
      return (
        <div className="custom-table">
          {value.title && <h3>{value.title}</h3>}
          <table className="customTable-table">
            <thead>
              <tr>
                {value.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {value.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },

    // 🔽 Accordion Renderer
    accordionBlock: ({ value }: { value: AccordionBlockValue }) => {
      if (!value?.content) return null;
      return (
        <details className="accordion-item">
          <summary className="accordion-title">
            <h3>{value.title}</h3>
          </summary>
          <div className="accordion-content">
            <PortableText
              value={value.content}
              components={portableTextComponents}
            />
          </div>
        </details>
      );
    },
  },
};
