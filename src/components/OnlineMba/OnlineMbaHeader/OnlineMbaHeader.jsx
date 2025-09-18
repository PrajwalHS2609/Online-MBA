"use client";
import React from "react";
import "./OnlineMbaHeader.css";
const OnlineMbaHeader = () => {
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="onlineHeader-container">
      <img
        src="https://static.wixstatic.com/media/0d481a_3a7c13cef30e47fe98a0b2bfba0385d5~mv2.jpg/v1/fill/w_1800,h_695,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d481a_3a7c13cef30e47fe98a0b2bfba0385d5~mv2.jpg"
        alt=""
      />
      <div className="onlineHeader-cover">
        <div className="onlineHeader-content">
          <h6> ACCELERATE YOUR CAREER WITH A UGC-APPROVED DEGREE</h6>
          <h2>
            Your Gateway to an <span>Online MBA</span>
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
            <a href="">
              {" "}
              <button>Contact Us</button>
            </a>
          </div>
        </div>
        <div className="onlineHeader-content">
          <img
            src="https://static.wixstatic.com/media/0d481a_904203a6733841e897e20829ce57088c~mv2.webp/v1/fill/w_657,h_740,al_c,q_85,enc_avif,quality_auto/ug_prog_girl_student-Photoroom.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OnlineMbaHeader;
