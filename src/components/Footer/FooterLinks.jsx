"use client";
import React from "react";
import { usePathname } from "next/navigation";

import "./Footer.css";
import Link from "next/link";
const FooterLinks = () => {
  const pathname = usePathname();

  return (
    <div className="footerLink">
      <h3>Links</h3>

      <li>
        {" "}
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/online-mba-course-admission"
          className={
            pathname === "/online-mba-course-admission" ? "active" : ""
          }
        >
          Online MBA
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/online-mba-programs-for-working-professionals"
          className={
            pathname === "/online-mba-programs-for-working-professionals"
              ? "active"
              : ""
          }
        >
          Programs
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/online-mba-course-from-top-indian-colleges"
          className={
            pathname === "/online-mba-course-from-top-indian-colleges"
              ? "active"
              : ""
          }
        >
          Top Universities
        </Link>
      </li>
    </div>
  );
};

export default FooterLinks;
