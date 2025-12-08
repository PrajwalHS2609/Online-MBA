import "./globals.css";
import Navbar from "./../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./../components/Footer/Footer";
import PopupForm from "./../components/PopupForm/PopupForm";
import SnowFall from './../components/Christmas/SnowFall/SnowFall';
import SantaClause from './../components/Christmas/SantaClause/SantaClause';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
        <meta
          name="google-site-verification"
          content="SoSLv5GGKbNMlvh4y4-WIdRO2Ksw6B6jX4uQ36Y_rIM"
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
        <SnowFall/>
        <SantaClause/>
        <Navbar />
        {children}
        <PopupForm />
        <Footer />
      </body>
    </html>
  );
}
