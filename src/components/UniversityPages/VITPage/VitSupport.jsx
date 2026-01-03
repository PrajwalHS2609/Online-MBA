import React from "react";
import "./../UniversityPages.css";
import {
  FaCalendarWeek,
  FaCheckCircle,
  FaLinkedin,
  FaRegFileAlt,
  FaSuitcase,
} from "react-icons/fa";

const VitSupport = () => {
  return (
    <div className="universitySupport-container">
      <div className="universitySupport-wrapper">
        <div className="universitySupport-content">
          <h4>Convinient Batch Options</h4>
          <ul>
            <li>
              <FaCalendarWeek className="universitySupport-ico" />
              Weekday Batch
            </li>
            <li>
              <FaCalendarWeek className="universitySupport-ico" />
              Weekend Batch
            </li>
          </ul>
          <p>
            Please Note: The session timings for the programme may be subject to
            change.
          </p>
        </div>
        <div className="universitySupport-content">
          <h4>Career Support</h4>
          <ul>
            <li>
              <FaLinkedin className="universitySupport-ico" />
              LinkedIn profile building
            </li>
            <li>
              <FaRegFileAlt className="universitySupport-ico" />
              Resume development and interview preparation
            </li>
            <li>
              <FaSuitcase className="universitySupport-ico" />
              Job placement assistance (available for Indian residents with 0–5
              years experience)
            </li>
          </ul>
          <p>
            Note: VIT is not directly involved in job placement services /
            Career services and makes no guarantees.
          </p>
        </div>
      </div>
      <div className="universitySupport-content">
        <h4>Fees & Payment Schedule</h4>
        <div className="universitySupport-itemWrapper">
          <div className="universitySupport-item">
            <h5>Total Programme Fee:</h5>
            <div className="universitySupport-price">
              <h3>₹1,80,000</h3>
              <p>(Inclusive of all taxes)</p>
            </div>
          </div>
          <div className="universitySupport-item">
            <h5>Payment Options:</h5>
            <ul>
              <li>
                <FaCheckCircle className="universitySupport-ico"/>
                One-time payment (discount available)
              </li>
              <li>
                <FaCheckCircle className="universitySupport-ico"/>
                Semester-wise installments
              </li>
              <li>
                <FaCheckCircle className="universitySupport-ico"/>
                EMI options available
              </li>
            </ul>
          </div>
        </div>
        <p>
          <b>Refund Policy:</b> As per university norms based on withdrawal
          timelines.
        </p>
      </div>
    </div>
  );
};

export default VitSupport;
