import React from "react";
import "./../UniversityPages.css";
import { FaBullhorn, FaCheckCircle, FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { PiGarageFill } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";

const VitCurriculum = () => {
  const card = [
    {
      id: 1,
      icon: <FaBullhorn />,
      title: "Marketing",
      description:
        "Consumer Behaviour, Digital Marketing, Retail Management, Service Marketing, and Brand Management for the Digital Era.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Human Resource",
      description:
        "Knowledge Management, Leadership and Team Building, Organisational Change and Development, Strategic HRM, and HR Analytics.",
    },
    {
      id: 3,
      icon: <GoGraph />,
      title: "Finance",
      description:
        "Indian Financial System, Security Analysis and Portfolio Management, Costing Methods and Techniques, Applied Fintech for Business, and Wealth Tech and Lending Tech.",
    },
    {
      id: 4,
      icon: <PiGarageFill />,
      title: "Operations and supply chain management",
      description:
        "Logistic and Supply Chain Management, Material Management, Project Management, Quality Management, and Supply Chain Analytics.",
    },
    {
      id: 5,
      icon: <TbWorld />,
      title: "General Management",
      description:
        "Knowledge Management, Digital Marketing, Indian Financial System, Leadership and Team Building, and Legal Aspects of Business.",
    },
  ];
  return (
    <div className="universityCurriculum-container">
     <div className="universityCurriculum-heading">
         <h2>
        <span>Curriculum</span> and <span>Specialisations</span>
      </h2>
      <p>
        The two-year MBA programme follows a structured curriculum that provides
        core business knowledge, practical application, and opportunities for
        domain specialisation.
      </p>
     </div>
      <div className="universityCurriculum-content">
        <h3>Curriculum Overview</h3>
        <div className="universityCurriculum-item">
          <b>1</b>
          <h4>Year One</h4>
          <ul>
            <div className="universityCurriculum-list">
              <li>
                <FaCheckCircle />
                Principles of Management
              </li>
              <li>
                <FaCheckCircle />
                Managerial Economics
              </li>
              <li>
                <FaCheckCircle />
                Financial Accounting
              </li>
              <li>
                <FaCheckCircle />
                Data Analytics
              </li>
              <li>
                <FaCheckCircle />
                Business Communication
              </li>
            </div>
            <div className="universityCurriculum-list">
              <li>
                <FaCheckCircle />
                Human Resource Management
              </li>
              <li>
                <FaCheckCircle />
                Marketing Management
              </li>
              <li>
                <FaCheckCircle />
                Operations Management
              </li>
              <li>
                <FaCheckCircle />
                Strategic Management
              </li>
              <li>
                <FaCheckCircle />
                Financial Management
              </li>
            </div>
          </ul>
        </div>
        <div className="universityCurriculum-item">
          <b>2</b>

          <h4>Year Two</h4>
          <ul>
            <li>
              <FaCheckCircle />
              Elective-1 to 7 (choose specialisation)
            </li>
            <li>
              <FaCheckCircle />
              Final Project
            </li>
          </ul>
        </div>
      </div>
      <div className="universityCurriculum-content">
        <h3>Specialisations Offered & Electives</h3>
        <div className="universityCurriculum-cardContainer">
          {card.map((x) => (
            <div className="universityCurriculum-card" key={x.id}>
              <span className="universityCurriculum-cardIco">{x.icon}</span>
              <h5>{x.title}</h5>
              <p>{x.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VitCurriculum;
