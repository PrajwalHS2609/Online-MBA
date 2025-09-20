import React from "react";
import "./HomeAbout.css";
import homeAboutUs from "@/Images/homeAbtUs.jpeg";
import Image from "next/image";
const HomeAbout = () => {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-wrapper">
        <div className="homeAbout-content">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            At R18 Education, we believe that learning should be flexible,
            accessible, and tailored to your goals. That’s why we offer a
            comprehensive range of online and distance education programs,
            including degrees, diplomas, and certification courses—designed to
            help you upskill and progress at your own pace.
          </p>
          <p>
            We know choosing the right educational path can be challenging. Our
            mission is to simplify that process by bringing together leading
            online institutions and providing expert guidance to help you
            discover the program that fits your aspirations.
          </p>
          <p>
            With over 8 years of experience in the EdTech industry, we’ve
            proudly supported more than 30,000 learners in achieving their
            academic and professional milestones. Whether you’re aiming to
            advance your career, explore new opportunities, or strengthen your
            expertise, our dedicated team is here to connect you with the right
            course and set you on the path to success.
          </p>
        </div>
        <div className="homeAbout-content">
          <Image src={homeAboutUs} alt="homeAboutUs" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
