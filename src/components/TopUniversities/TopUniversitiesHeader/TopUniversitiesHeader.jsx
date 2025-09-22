"use client";

import React from "react";
import banner from "./../../../Images/onlineMbaBanner.png";
import Image from "next/image";
import aicte from "@/Images/Approved/AICTE.png";
import naac from "@/Images/Approved/NAAC.png";
import nirf from "@/Images/Approved/NIRF.png";
import qaa from "@/Images/Approved/QAA.png";
import ugc from "@/Images/Approved/UGC.png";
import wes from "@/Images/Approved/WES.png";
import "./TopUniversitiesHeader.css";
const TopUniversitiesHeader = () => {
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="onlineHeader-container">
      <Image src={banner} alt="banner" />
      <div className="onlineHeader-cover">
        <div className="onlineHeader-content">
          <h6> ACCELERATE YOUR CAREER WITH A UGC-APPROVED DEGREE</h6>
          <h2>
            Top <span>Online MBA</span> Universities
          </h2>
          {/* <h5>Flexible, Accredited, and Designed for Career Growth</h5> */}
          <p>
            Join India’s leading online MBA programs designed for working
            professionals & freshers. Learn at your own pace, get
            industry-ready, and unlock global opportunities.
          </p>
          <div className="onlineHeader-btnContainer">
            <button className="button-87" role="button" onClick={handlePop}>
              Enroll Now
            </button>{" "}
            <a href="tel:">
              {" "}
              <button>Contact Us</button>
            </a>
          </div>
        </div>
        <div className="onlineHeader-content">
          <ul>
            <li>
              <Image src={aicte} alt="aicte" />
            </li>
            <li>
              <Image src={naac} alt="naac" />
            </li>
            <li>
              <Image src={nirf} alt="nirf" />
            </li>
            <li>
              <Image src={qaa} alt="qaa" />
            </li>
            <li>
              <Image src={ugc} alt="ugc" />
            </li>
            <li>
              <Image src={wes} alt="wes" />
            </li>
          </ul>
        </div>
        {/* <div className="onlineHeader-content">
          <img
            src="https://static.wixstatic.com/media/0d481a_904203a6733841e897e20829ce57088c~mv2.webp/v1/fill/w_657,h_740,al_c,q_85,enc_avif,quality_auto/ug_prog_girl_student-Photoroom.webp"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default TopUniversitiesHeader;
