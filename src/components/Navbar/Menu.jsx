"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMenu3, TbX } from "react-icons/tb";

const Menu = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };



  return (
    <div className="navbar-container">
      {/* Desktop menu */}
      <div className="menu-content">
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/online-mba-course-admission"
              className={pathname === "/online-mba-course-admission" ? "active" : ""}
            >
              Online MBA
            </Link>
          </li>
          <li>
            <Link
              href="/online-mba-programs-for-working-professionals"
              className={pathname === "/online-mba-programs-for-working-professionals" ? "active" : ""}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="/online-mba-course-from-top-indian-colleges"
              className={pathname === "/online-mba-course-from-top-indian-colleges" ? "active" : ""}
            >
              Top Universities
            </Link>
          </li>
        </ul>
        <button className="button-87" onClick={handlePop}>
          Speak to Advisor
        </button>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="repMenu-container">
        <TbMenu3 className="respMenu-icon" onClick={() => setSidebarOpen(true)} />
      </div>

      {/* Sidebar menu */}
        <div  className={`repMenu-content ${sidebarOpen ? "show" : ""}`}>
          <TbX
            className="respMenu-icon"
            style={{ position: "absolute", top: "20px", right: "20px" }}
           onClick={() => setSidebarOpen(false)}
          />
          <ul  >
            <li>
              <Link href="/" onClick={() => setSidebarOpen(false)} className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/online-mba-course-admission" onClick={() => setSidebarOpen(false)} className={pathname === "/online-mba-course-admission" ? "active" : ""}>
                Online MBA
              </Link>
            </li>
            <li>
              <Link href="/online-mba-programs-for-working-professionals" onClick={() => setSidebarOpen(false)} className={pathname === "/online-mba-programs-for-working-professionals" ? "active" : ""}>
                online-mba-programs-for-working-professionals
              </Link>
            </li>
            <li>
              <Link href="/online-mba-course-from-top-indian-colleges" onClick={() => setSidebarOpen(false)} className={pathname === "/online-mba-course-from-top-indian-colleges" ? "active" : ""}>
                Top Universities
              </Link>
            </li>
          </ul>
          <button
            className="button-87"
            style={{ margin: "30px 20px" }}
            onClick={() => {
              handlePop();
              toggleMenu();
            }}
          >
            Speak to Advisor
          </button>
        </div>
    </div>
  );
};

export default Menu;
