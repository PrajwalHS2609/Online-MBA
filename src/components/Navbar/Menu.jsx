"use client"
import React from "react";
import "./Navbar.css";
import Link from "next/link";

const Menu = () => {
  const handlePop=()=>{
      document.querySelector(".popup-container").style.display = "flex";

  }
  return (
    <div className="menu-container">
      <div className="menu-content">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/online-mba">Online MBA</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/top-universities">Top Universities</Link></li>
        </ul>
        <button onClick={handlePop}>Speak to Advisor</button>
      </div>
    </div>
  );
};

export default Menu;
