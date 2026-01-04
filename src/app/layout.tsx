import "./globals.css";
import Navbar from "./../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/Styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./../components/Footer/Footer";
import PopupForm from "./../components/PopupForm/PopupForm";
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
        <meta name="robots" content="max-image-preview:large" />

        <meta
          name="google-site-verification"
          content="SoSLv5GGKbNMlvh4y4-WIdRO2Ksw6B6jX4uQ36Y_rIM"
        />
        {/* ✅ JSON-LD Schema */}
        <Script
          id="product-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "R18 Education",
              "image":
                "https://onlinembaadmission.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fr18logo.d6dbf246.png&w=1080&q=75",
              "description":
                "Join India’s leading online MBA programs designed for working professionals & freshers. Learn at your own pace, get industry-ready, and unlock global opportunities.",
              "brand": {
                "@type": "Thing",
                "name": "R18 Education",
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                },
                "author": {
                  "@type": "Person",
                  "name": "Rishi",
                },
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "2792",
              },
            }),
          }}
        />
      </head>
      <body
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Navbar />
        {children}
        <PopupForm />
        <Footer />
      </body>
    </html>
  );
}
