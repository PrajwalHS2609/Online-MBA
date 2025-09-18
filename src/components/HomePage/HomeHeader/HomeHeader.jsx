"use client";
import React from "react";
import "./HomeHeader.css";
import Image from "next/image";
import banner from "@/Images/Banner 1.png"
const HomeHeader = () => {
  const keyPoints = [
    { id: 1, content: "8000+ Students Trust for Unbiased Counselling" },
    {
      id: 2,
      content:
        "100% Approved Online & Distance Education Colleges & Universites   ",
    },
    {
      id: 3,
      content: "100% Unbiased Experts Guidance by our Certified Counsellors",
    },
    {
      id: 4,
      content: "100% Complete Assistance Till you Complete your Degree",
    },
  ];
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="homeHeader-container">
      <div className="homeHeader-wrapper">
        <Image
          src={banner}
          alt="banner"
        />
        <div className="homeHeader-cover">
          <div className="homeHeader-content">
            <h2>ONLINE MBA</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              repudiandae veritatis necessitatibus quaerat eius. Pariatur
              distinctio consequuntur nihil repellendus eligendi non impedit
              porro neque, optio, repudiandae, praesentium animi esse iste.
            </p>
            <div className="homeHeader-contact">
              <button onClick={handlePop}>Enroll Now</button>
              <a href="tel:1234567980">
                <button>Contact Us</button>
              </a>
            </div>
          </div>
          <div className="header-coverContent">
            {keyPoints.map((x) => (
              <div className="header-keyContainer" key={x.id}>
                <div className="header-keyIconContainer">
                  {/* <Image src={x.icon} alt={x.content} /> */}
                </div>
                <h6>{x.content}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
