"use client"
import React from "react";
import "./ProgramHeader.css";
import Image from "next/image";
import aicte from "@/Images/Approved/AICTE.png";
import naac from "@/Images/Approved/NAAC.png";
import nirf from "@/Images/Approved/NIRF.png";
import qaa from "@/Images/Approved/QAA.png";
import ugc from "@/Images/Approved/UGC.png";
import wes from "@/Images/Approved/WES.png";

const ProgramHeader = () => {
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="programHeader-container">
      <img
        src="https://static.wixstatic.com/media/0d481a_acb4bf59e57e4423a23eb1c7e47a8cde~mv2.webp/v1/fill/w_1998,h_776,al_c,q_85,enc_avif,quality_auto/0d481a_acb4bf59e57e4423a23eb1c7e47a8cde~mv2.webp"
        alt=""
      />
      <div className="programHeader-cover">
        <div className="programHeader-content">
          <h6> Top-Ranked Online Degree & Certification Programs</h6>
          <h2>Online Learning Real-World Value</h2>
          <p>
            ​Earn Industry-recognized Degrees and Certifications Online - just
            as credible as Campus-Based Learning.
          </p>
          <div className="programHeader-btnContainer">
            <button onClick={handlePop}>Enroll Now</button>
            <a href="">
              {" "}
              <button>Contact Us</button>
            </a>
          </div>
        </div>
        <div className="programHeader-content">
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
      </div>
    </div>
  );
};

export default ProgramHeader;
