import "./globals.css";
import Navbar from "./../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./../components/Footer/Footer";
import PopupForm from "./../components/PopupForm/PopupForm";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
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
