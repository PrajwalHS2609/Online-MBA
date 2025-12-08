import React from "react";
import "./Footer.css";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";

// import razorPay from "./../../Imgs/razorpay.png";
// import Image from "next/image";

const FooterAddress = () => {
  return (
    <div className="footerAddress">
      <h3>Address</h3>
      <li>
        <FaLocationDot className="addressIco" />
        <a href="https://www.google.com/maps/place/Prizma+Academy/@13.0216592,77.6382462,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae171dd011b4e5:0xabab1818c3e26cae!8m2!3d13.0216592!4d77.6408211!16s%2Fg%2F11f8p4861f?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D">
          {" "}
          Bangalore, Jaipur
        </a>
      </li>
      <li>
        <FaPhone className="addressIco" />
        <a href="tel:6362946008">(+91) 6362946008</a>
      </li>
      <li>
        <FaEnvelopeOpenText className="addressIco" />
        <a href="mailto:info@prizmaacademy.com">info@prizmaacademy.com</a>
      </li>

      <div className="footerBioSocial">
        <a href="https://www.instagram.com/onlinembainindia/">
          <FaInstagram className="socialIco" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100075614217567">
          <FaFacebook className="socialIco" />
        </a>
        {/* <a href="https://www.instagram.com/prizmalanguageacademy/">
          <FaXTwitter className="socialIco" />
        </a>
        <a href="https://www.youtube.com/channel/UC_MS3y-5o36akwsI6hNbA9Q">
          <FaLinkedin className="socialIco" />
        </a> */}
      </div>
      {/* <div className="footerPay">
        <a href="https://pages.razorpay.com/prizma-academy">
          <Image src={razorPay} alt="razorPay" />
        </a>
      </div> */}
    </div>
  );
};

export default FooterAddress;
