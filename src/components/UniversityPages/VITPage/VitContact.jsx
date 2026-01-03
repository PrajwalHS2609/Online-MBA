"use client"
import React from "react";

import "./../UniversityPages.css";
import { FaPhoneAlt } from "react-icons/fa";

const VitContact = () => {
    const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="universityContact-container">
      <div className="universityContact-heading">
        {" "}
        <h2>Ready to Transform Your Career?</h2>
        <p>
          Join India's premier online MBA programme from VIT University and
          unlock new career opportunities.
        </p>
      </div>
      <div className="universityContact-btnContainer">
        <button onClick={handlePop}>Enquire Now</button>
        <button onClick={handlePop}>Speak to a Counsellor</button>
        <a href="">
          <button>Download Brochure</button>
        </a>
      </div>
      <div className="universityContact-info">
        <h4>Contact Information</h4>
        <FaPhoneAlt className="universityContact-icon" />
        <h5>Admission Helpline</h5>
        <a href="tel:6362946008">+91 6362946008</a>
      </div>
    </div>
  );
};

export default VitContact;
