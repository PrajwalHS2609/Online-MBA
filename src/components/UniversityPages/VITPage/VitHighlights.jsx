import React from "react";
import "./../UniversityPages.css";
import { MdLaptopMac } from "react-icons/md";
import {
  FaBook,
  FaCalendarAlt,
  FaCertificate,
  FaClock,
  FaGraduationCap,
  FaQuestionCircle,
  FaUsers,
} from "react-icons/fa";
import { FaChalkboardUser, FaPencil } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
const VitHighlights = () => {
  return (
    <div className="universityHighlight-container">
      <h2>Programme <span>Highlights</span></h2>
      <div className="universityHighlight-wrapper">
        <div className="universityHighlight-content">
          <h4>Programme Structure</h4>
          <br />
          <ul>
            <li>
              <FaCalendarAlt className="universityHighlight-icon" />
              Duration:24 Months
            </li>
            <li>
              <MdLaptopMac className="universityHighlight-icon" />
              Mode:Live Online + Recorded Sessions
            </li>
            <li>
              <FaClock className="universityHighlight-icon" />
              Effort:16–18 hours/week
            </li>
            <li>
              <FaGraduationCap className="universityHighlight-icon" />
              Eligibility: Bachelor's degree (minimum 50%; 45% for
              reserved category)
            </li>
            <li>
              <FaUsers className="universityHighlight-icon" />
              Certification:MBA degree from VIT
            </li>
            <li>
              <FaCertificate className="universityHighlight-icon" />
              Alumni Status:Granted
            </li>
            <li>
              <FaPencil className="universityHighlight-icon" />
              Exam Mode:End-term offline assessments at multiple centers
              across India
            </li>
          </ul>
        </div>
        <div className="universityHighlight-content">
          <h4>Learning Experience</h4>
          <br />
          <p>
            VIT's Online MBA programme embraces a cutting-edge blended format,
            seamlessly merging the best of both worlds.
          </p>
          <ul>
            <li>
              <IoIosVideocam className="universityHighlight-icon" />
              Pre-recorded videos by VIT faculty that cater to your schedule
            </li>
            <li>
              <FaChalkboardUser className="universityHighlight-icon" />
              Weekly live sessions with VIT faculty for real-time interaction
            </li>
            <li>
              <FaQuestionCircle className="universityHighlight-icon" />
              Doubt clearing by industry professionals and subject matter
              experts
            </li>
            <li>
              <FaBook className="universityHighlight-icon" />
              Curriculum includes 50+ real-world case studies from Ivey,
              ISB-Harvard, etc.
            </li>
          </ul>
          <br />
          <h4>Sample Case Studies:</h4>
          <ul className="universityHighlight-list">
            <li>Paper Boat: Branding Delightful Nostalgia</li>
            <li>Zomato: Hyperlocal Battle for Online Food Delivery</li>
            <li>ITC: Stock Price Volatility</li>
            <li>Ola: The Digital Marketing Strategy</li>
            <li>Epigamia: Chronicle of an Emerging Brand</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VitHighlights;
