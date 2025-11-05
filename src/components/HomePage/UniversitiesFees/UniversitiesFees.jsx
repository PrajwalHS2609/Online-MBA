import React from "react";
import "./UniversitiesFees.css";
import { FaUniversity } from "react-icons/fa";

const UniversitiesFees = () => {
  const universities = [
    { name: "Amity University", fee: "₹1,99,000" },
    { name: "NMIMS University", fee: "₹2,20,000" },
    { name: "Manipal University Jaipur", fee: "₹1,75,000" },
    { name: "Sikkim Manipal University", fee: "₹1,10,000" },
    { name: "Vellore Institute of Technology", fee: "₹1,80,000" },
  ];

  return (
    <div className="universityFees-container">
      <div className="fees-header">
        <h2>
          Online MBA <span>University Fee Comparison</span>
        </h2>
        <p>
          Compare the tuition fees of India’s leading universities offering
          Online MBA programs. Choose the one that best fits your budget and
          career goals.
        </p>
      </div>

      <div className="fees-table-container">
        <div className="fees-table-header">
          <div className="header-col">University</div>
          <div className="header-col">Total Fees</div>
        </div>

        <div className="fees-table-body">
          {universities.map((uni, index) => (
            <div className="fees-row" key={index}>
              <div className="fees-university">
                <div className="uni-icon">
                  <FaUniversity />
                </div>
                <span>{uni.name}</span>
              </div>
              <div className="fees-amount">{uni.fee}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversitiesFees;
