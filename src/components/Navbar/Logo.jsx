import React from "react";
import "./Navbar.css";
import logo from "@/Images/r18logo.png";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="logo-container">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
