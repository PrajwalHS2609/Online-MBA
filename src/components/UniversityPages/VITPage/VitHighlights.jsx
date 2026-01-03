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
      <h2>Programme Highlights</h2>
      <div className="universityHighlight-wrapper">
        <div className="universityHighlight-content">
          <h4>Programme Structure</h4>
          <br />
          <ul>
            <li>
              <FaCalendarAlt className="universityHighlight-icon" />
              <b>Duration:</b>24 Months
            </li>
            <li>
              <MdLaptopMac className="universityHighlight-icon" />
              <b>Mode:</b>Live Online + Recorded Sessions
            </li>
            <li>
              <FaClock className="universityHighlight-icon" />
              <b>Effort:</b>16–18 hours/week
            </li>
            <li>
              <FaGraduationCap className="universityHighlight-icon" />
              <b>Eligibility:</b> Bachelor's degree (minimum 50%; 45% for
              reserved category)
            </li>
            <li>
              <FaUsers className="universityHighlight-icon" />
              <b>Certification:</b>MBA degree from VIT
            </li>
            <li>
              <FaCertificate className="universityHighlight-icon" />
              <b>Alumni Status:</b>Granted
            </li>
            <li>
              <FaPencil className="universityHighlight-icon" />
              <b>Exam Mode:</b>End-term offline assessments at multiple centers
              across India
            </li>
          </ul>
        </div>
        <div className="universityHighlight-content">
          <h4>Learning Experience</h4>
          <p>
            VIT's Online MBA programme embraces a cutting-edge blended format,
            seamlessly merging the best of both worlds.
          </p>
          <ul>
            <li>
              <IoIosVideocam />
              Pre-recorded videos by VIT faculty that cater to your schedule
            </li>
            <li>
              <FaChalkboardUser />
              Weekly live sessions with VIT faculty for real-time interaction
            </li>
            <li>
              <FaQuestionCircle />
              Doubt clearing by industry professionals and subject matter
              experts
            </li>
            <li>
              <FaBook />
              Curriculum includes 50+ real-world case studies from Ivey,
              ISB-Harvard, etc.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VitHighlights;
