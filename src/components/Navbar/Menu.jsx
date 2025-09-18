"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="menu-container">
      <div className="menu-content">
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/online-mba"
              className={pathname === "/online-mba" ? "active" : ""}
            >
              Online MBA
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className={pathname === "/programs" ? "active" : ""}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="/top-universities"
              className={pathname === "/top-universities" ? "active" : ""}
            >
              Top Universities
            </Link>
          </li>
        </ul>
        {/* <button onClick={handlePop}>Speak to Advisor</button> */}
        <button className="button-87" role="button" onClick={handlePop}>
          Speak to Advisor
        </button>
      </div>
    </div>
  );
};

export default Menu;
