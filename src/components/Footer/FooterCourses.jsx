"use client"
import React from "react";
import "./Footer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterCourses = () => {
    const pathname = usePathname();

  return (
    <div className="footerLink">
      <h3>Courses</h3>
      <li>
        {" "}
        <Link
          href="/online-german-course-in-bangalore"
         className={pathname === "/online-german-course-in-bangalore" ? "active" : ""}
        >
          German
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/online-spanish-course-in-bangalore"
         className={pathname === "/online-spanish-course-in-bangalore" ? "active" : ""}
        >
          Spanish
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/online-french-course-in-bangalore"
         className={pathname === "/online-french-course-in-bangalore" ? "active" : ""}
        >
          French
        </Link>
      </li>
            <li>
        {" "}
        <Link
          href="/online-italian-course-in-bangalore"
         className={pathname === "/online-italian-course-in-bangalore" ? "active" : ""}
        >
          Italian
        </Link>
      </li>
      {/* <li>
        {" "}
        <Link
          href="/japanese"
         className={pathname === "/" ? "active" : ""}
        >
          Japanese
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/korean"
         className={pathname === "/" ? "active" : ""}
        >
          Korean
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/mandarin"
         className={pathname === "/" ? "active" : ""}
        >
          Mandarin
        </Link>
      </li> */}
    </div>
  );
};

export default FooterCourses;
