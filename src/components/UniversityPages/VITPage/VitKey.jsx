import React from "react";
import "./../UniversityPages.css";
import { FaCheckCircle } from "react-icons/fa";

const VitKey = () => {
  return (
    <div className="universityKey-container">
      <div className="universityKey-wrapper">
        <h2>Key Recognitions</h2>
        <div className="universityKey-content">
          <ul>
            <li>
              <FaCheckCircle className="universityKey-icon" /> Ranked among Top
              10 Universities in India – NIRF 2024
            </li>
            <li>
              <FaCheckCircle className="universityKey-icon" /> QS 4-star rated
              overall (first in India)
            </li>
            <li>
              <FaCheckCircle className="universityKey-icon" /> NAAC A++
              accreditation
            </li>
            <li>
              <FaCheckCircle className="universityKey-icon" /> AACSB and ACBSP
              member institution
            </li>
            <li>
              <FaCheckCircle className="universityKey-icon" /> WES recognised
            </li>
            <li>
              <FaCheckCircle className="universityKey-icon" /> UGC Entitled and
              AICTE Approved MBA Degree
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VitKey;
