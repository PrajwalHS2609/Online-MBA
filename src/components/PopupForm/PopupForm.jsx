"use client";
import React from "react";
import "./PopupForm.css";
import { HiMiniXMark } from "react-icons/hi2";

const PopupForm = () => {
  const handleExit = () => {
    document.querySelector(".popup-container").style.display = "none";
  };
  return (
    <div className="popup-container">
      <div className="popup-wrapper">
        {/* Left Side - Image */}
        <div className="popup-content">
          <img
            src="https://images.pexels.com/photos/3793238/pexels-photo-3793238.jpeg"
            alt="popup"
          />
        </div>

        {/* Right Side - Form */}
        <div className="popup-content form-side">
          <div className="popup-exit">
            <HiMiniXMark className="popup-exitIcon" onClick={handleExit} />
          </div>
          <h2>Get in Touch</h2>
          <form className="popup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />

            <select name="" id="" required>
              <option value="">Select Course</option>
              <option value="MBA (General Management)">
                MBA (General Management)
              </option>
              <option value="MBA (Finance)">MBA (Finance)</option>
              <option value="MBA (Marketing)">MBA (Marketing)</option>
              <option value="MBA (HR Management)">MBA (HR Management)</option>
              <option value="MBA (Information Technology)">
                MBA (Information Technology)
              </option>
              <option value="MBA (Supply Chain Management)">
                MBA (Supply Chain Management)
              </option>
              <option value="MBA (Data Analytics)">MBA (Data Analytics)</option>
              <option value="MBA (Business Analytics)">
                MBA (Business Analytics)
              </option>
            </select>

            <textarea placeholder="Your Message" rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
