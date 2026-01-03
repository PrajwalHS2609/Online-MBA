"use client";

import React from "react";
import "./UniversityHeader.css";
const UniversityHeader = () => {
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="universityHeader-container">
      {/* <Image src={banner} alt="banner" /> */}
      <div className="universityHeader-cover">
        <div className="universityHeader-content">
          <h6> A Globally Recognised Institution</h6>
          <h2>Top Online MBA from VIT University</h2>
          <ul>
            <li>UGC Entitled</li>
            <li>AICTE Approved</li>
            <li>2-Year MBA</li>
            <li>VIT Alumni Status</li>
          </ul>
          <div className="universityHeader-btnContainer">
            <button className="button-87" role="button" onClick={handlePop}>
              Enroll Now{" "}
            </button>
            <a href="tel:6362946008">
              {" "}
              <button>Contact Us</button>
            </a>
          </div>
        </div>
        <div className="universityHeader-content">
          <div className="form-wrapper">
            <h2 className="form-title">Request Information</h2>

            <form className="info-form">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Mobile Number" />

              <select defaultValue="">
                <option value="" disabled>
                  Education Level
                </option>
                <option>High School</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
              </select>

              <select defaultValue="">
                <option value="" disabled>
                  Work Experience
                </option>
                <option>Fresher</option>
                <option>1–3 Years</option>
                <option>3–5 Years</option>
                <option>5+ Years</option>
              </select>

              <select defaultValue="">
                <option value="" disabled>
                  Preferred Specialisation
                </option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Full Stack</option>
              </select>

              <button type="submit" className="submit-btn">
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityHeader;
