import React from "react";
import "./OnlineMbaEligibility.css";
import { FaClipboardList, FaGraduationCap, FaUserTie } from "react-icons/fa6";

const OnlineMbaEligibility = () => {
  const eligibilityData = [
    {
      icon: <FaGraduationCap />,
      title: "Educational Qualification:",
      desc: "Applicants must hold a bachelor’s degree or an equivalent qualification in any discipline from a recognised university. A minimum aggregate score of 50% (or 45% for candidates from reserved categories) is typically required.",
    },
    {
      icon: <FaClipboardList />,
      title: "Entrance Exams:",
      desc: "While many universities offering Online MBA programmes do not mandate entrance exams, some may consider test scores as part of the admission process. Commonly accepted exams include CAT, XAT, MAT, CMAT, SNAP, and other management entrance tests. In certain cases, institutes may also conduct personal interviews to assess candidates’ suitability for the programme.",
    },
    {
      icon: <FaUserTie />,
      title: "Additional Considerations:",
      desc: "There is no upper age limit for pursuing an Online MBA. Candidates with prior work experience are often preferred, as it adds professional depth to the learning process. Additionally, students in the final year of their undergraduate studies are generally eligible to apply for admission. Some universities may specifically seek applicants with 2–3 years of relevant professional experience.",
    },
  ];

  return (
    <div className="onlineEligibility-container">
      <div className="onlineEligibility-headContainer">
        <h2>
          Eligibility Criteria and <span>Admission Requirements</span>
        </h2>
        <p>
          Before enrolling in an Online MBA programme, it’s important to review
          the eligibility requirements set by each institution, as these may
          vary depending on the university and chosen specialisation. However,
          the general eligibility criteria for most Online MBA courses include:
        </p>
      </div>

      <div className="eligibility-cards">
        {eligibilityData.map((item, index) => (
          <div
            className={`eligibility-card card-${index + 1}`}
            key={index}
          >
            <div className="eligibility-icon">{item.icon}</div>
            <div className="eligibility-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineMbaEligibility;
