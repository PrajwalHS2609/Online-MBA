import React from "react";
import "./../UniversityPages.css";
import { FaStar, FaTrophy } from "react-icons/fa";
const universityAbout = () => {
  return (
    <div className="universityAbout-wrapper">
      <h2>
        About <span>VIT</span> University
      </h2>
      <div className="universityAbout-container">
        <div className="universityAbout-content">
          <img src="https://distancembaadmission.com/images/6.png" alt="" />
        </div>
        <div className="universityAbout-content">
          <div className="universityAbout-item">
            <p>
              Vellore Institute of Technology (VIT) is one of India's premier
              institutions, known for its commitment to delivering high-quality
              education aligned with global standards.
            </p>
            <p>
              VIT Online Education extends this legacy by offering flexible,
              accessible, and industry-relevant online programmes tailored for
              students and working professionals worldwide. These programmes are
              delivered through state-of-the-art digital infrastructure and
              taught by experienced VIT faculty, with a strong focus on emerging
              fields and regulatory compliance.
            </p>
          </div>
          <div className="universityAbout-item">
            <ul>
              <li>
                <FaTrophy className="universityAbout-icon" /> Top 10
                Universities in India
              </li>
              <li>
                <FaStar className="universityAbout-icon" /> QS 4-star rated
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default universityAbout;
