"use client"
import React from "react";
import Image from "next/image";
import aicte from "@/Images/Approved/AICTE.png";
import naac from "@/Images/Approved/NAAC.png";
import nirf from "@/Images/Approved/NIRF.png";
import qaa from "@/Images/Approved/QAA.png";
import ugc from "@/Images/Approved/UGC.png";
import wes from "@/Images/Approved/WES.png";
import "./ContentHeader.css"
const ContentHeader = (props) => {
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="contentHeader-container">
      <Image src={props.img} alt={props.title} width={1900} height={600} />
      <div className="contentHeader-cover">
        <div className="contentHeader-content">
          <h2>{props.title}</h2>

          <div className="contentHeader-btnContainer">
            <button className="button-87" role="button" onClick={handlePop}>
              Enroll Now
            </button>{" "}
            <a href="tel:">
              {" "}
              <button>Contact Us</button>
            </a>
          </div>
        </div>
        <div className="contentHeader-content">
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
        {/* <div className="contentHeader-content">
          <img
            src="https://static.wixstatic.com/media/0d481a_904203a6733841e897e20829ce57088c~mv2.webp/v1/fill/w_657,h_740,al_c,q_85,enc_avif,quality_auto/ug_prog_girl_student-Photoroom.webp"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default ContentHeader;
