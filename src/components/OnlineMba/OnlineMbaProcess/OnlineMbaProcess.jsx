import React from "react";
import "./OnlineMbaProcess.css";
import {
  FaFileAlt,
  FaFileUpload,
  FaSearch,
  FaMoneyCheckAlt,
  FaUniversity,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Registration Process",
    desc: "Begin by submitting your application form and paying the processing fee.",
    color: "linear-gradient(135deg, #ff4b2b, #ff416c)",
  },
  {
    icon: <FaFileUpload />,
    title: "Document Submission",
    desc: "Provide your academic records, personal identification documents, and proof of work experience (if applicable).",
    color: "linear-gradient(135deg, #ffb347, #ffcc33)",
  },
  {
    icon: <FaSearch />,
    title: "Document Verification",
    desc: "The university will verify your submitted documents along with your registered mobile number and email ID.",
    color: "linear-gradient(135deg, #00c6ff, #0072ff)",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Fee Payment",
    desc: "You can pay the course fee in a single payment, annually, semester-wise, or through convenient EMI options.",
    color: "linear-gradient(135deg, #6a11cb, #2575fc)",
  },
  {
    icon: <FaUniversity />,
    title: "Admission Confirmation",
    desc: "Once verified and approved, your admission will be confirmed, and you’ll receive access to study materials and learning resources.",
    color: "linear-gradient(135deg, #00b09b, #96c93d)",
  },
];

const OnlineMbaProcess = () => {
  return (
    <div className="process-container">
      <div className="process-heading">
        <h2>Admission <span>process</span></h2>
        <p>
          The admission process for an Online MBA programme may differ slightly
          from one university to another. However, selecting a specific
          specialisation often simplifies the overall admission procedure,
          making it more streamlined and straightforward.
        </p>
      </div>
      <div className="process-wrapper">
        {steps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="process-icon" style={{ background: step.color }}>
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {index < steps.length - 1 && <div className="process-line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineMbaProcess;
