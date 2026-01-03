"use client";

import React from "react";
import "./UniversityHeader.css";
import Swal from "sweetalert2";
import vitBanner from "@/Images/UniversitiesImg/vit.png";
import Image from "next/image";
const UniversityHeader = () => {
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "8e8187ed-fc3e-4bd8-b553-0755da89ab07");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="universityHeader-container">
      <Image src={vitBanner} alt="vitBanner" />
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

            <form className="info-form" onSubmit={onSubmit}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Mobile Number" />

              <select defaultValue="" name="Education Level">
                <option value="" disabled>
                  Education Level
                </option>
                <option value="Bachelor Degree">Bachelor Degree</option>
                <option value="Master Degree">Master Degree</option>
                <option value="Diploma">Diploma</option>
                <option value="Others">Others</option>
              </select>

              <select defaultValue="" name="Work Experience">
                <option value="" disabled>
                  Work Experience
                </option>
                <option value="Still Student">Still Student</option>
                <option value="Less Than 5 Years">Less Than 5 Years</option>
                <option value="5–10 Years">5– 10 Years</option>
                <option value="10–15 Years">10–15 Years</option>
                <option value="16+ Years">16+ Years</option>
              </select>

              <select defaultValue="">
                <option name="" disabled>
                  Preferred Specialisation
                </option>
                <option value="Marketing">Marketing</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Finance">Finance</option>
                <option value="Operation">Operation</option>
                <option value="General">General</option>
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
