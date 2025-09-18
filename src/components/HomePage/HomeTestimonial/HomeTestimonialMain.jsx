import React from "react";
import "./HomeTestimonial.css";
import HomeTestimonialHead from "./HomeTestimonialHead";
import HomeTestimonialCarousel from "./HomeTestimonialCarousel";
const HomeTestimonialMain = () => {
  return (
    <div className="homeTestimonialMain">
      <div className="homeTestimonialMain-content">
        <div className="homeTestimonialMain-ImgWrapper">
          <div className="homeTestimonialMain-ImgContent1"></div>
          <div className="homeTestimonialMain-ImgContent2">
            <img
              src="https://img.freepik.com/free-photo/young-english-teacher-doing-her-class-online_23-2149019782.jpg?t=st=1730532077~exp=1730535677~hmac=ca3bc658190b425a0e3abd2559dfe398d9d789ff3c21e528681ed343bd11601b&w=900"
              alt=""
            />
          </div>
          <div className="homeTestimonialMain-ImgContent3"></div>
        </div>
      </div>
      <div className="homeTestimonialMain-content">
        <HomeTestimonialHead />
        <HomeTestimonialCarousel />
      </div>
    </div>
  );
};

export default HomeTestimonialMain;
