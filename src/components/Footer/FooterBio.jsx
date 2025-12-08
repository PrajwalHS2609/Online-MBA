import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faFacebook,
//   faXTwitter,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import logo from "./../../Images/R18 Education.png";
import Image from "next/image";
// import razorPay from "./../../Imgs/razorpay.png";
const FooterBio = () => {
  return (
    <div className="footerBio">
      <Image src={logo} alt="" />
      <p>
        Unlock your leadership potential with an Online MBA from top Indian
        universities. Gain global business insights, executive skills, and
        career growth – all with flexible online learning.
      </p>
      {/* <a href="mailto:info@prizmaacademy.com">info@prizmaacademy.com</a> */}
      {/* <div className="footerBioSocial">
        <a href="https://www.facebook.com/PrizmaAcademyfb">
          {" "}
          <FontAwesomeIcon
            icon={faInstagram}
            className="socialIco"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/company/prizmaacademy/">
          {" "}
          <FontAwesomeIcon
            icon={faFacebook}
            className="socialIco"
          ></FontAwesomeIcon>{" "}
        </a>
        <a href="https://www.instagram.com/prizmalanguageacademy/">
          {" "}
          <FontAwesomeIcon
            icon={faXTwitter}
            className="socialIco"
          ></FontAwesomeIcon>{" "}
        </a>
        <a href="https://www.youtube.com/channel/UC_MS3y-5o36akwsI6hNbA9Q">
          {" "}
          <FontAwesomeIcon
            icon={faLinkedin}
            className="socialIco"
          ></FontAwesomeIcon>
        </a>
      </div> */}
      {/* <div className="footerPay">
        <a href="https://pages.razorpay.com/prizma-academy">
          <img src={razorPay} alt="razorPay" />
        </a>
      </div> */}
    </div>
  );
};

export default FooterBio;
