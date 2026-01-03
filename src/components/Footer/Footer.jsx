"use client"
import React from "react";
import "./Footer.css";
import FooterBio from "./FooterBio";
import FooterLinks from "./FooterLinks";
import FooterCourses from "./FooterCourses";
import FooterAddress from "./FooterAddress";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footerWrapper">
      <div className="footer">
        <FooterBio />
        <FooterLinks />
        {/* <FooterCourses /> */}
        <FooterAddress />
      </div>
      <div className="belowFooter">
        <li>Copyright © 2026 R18Education</li>
        <li onClick={handleScrollTop}>
          <FaArrowUp className="belowFooterIco"/>
        </li>
        <li>
          <Link href={"/privacy-policy"}>Privacy Policy</Link> |{" "}
          <Link href={"/refund-policy"}>Refund Policy</Link> |{" "}
          <Link href={"/terms-of-services"}>Terms of Services</Link>
        </li>
      </div>{" "}
    </div>
  );
};

export default Footer;
