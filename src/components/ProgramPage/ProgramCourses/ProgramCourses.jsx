import React from "react";
import "./ProgramCourses.css";
import Link from "next/link";
const ProgramCourses = () => {
  const card = [
    {
      id: 1,
      title: "MBA (Master of Business Administration)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 2,
      title: "MBA (Master of Business Administration)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 3,
      title: "MBA (Master of Business Administration)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 4,
      title: "MBA (Master of Business Administration)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
  ];
  return (
    <div className="programCourse-container">
      <div className="programCourse-head">
        <h2>
          Unlock Your Career Potential — 100% <span>Online Programs</span>
        </h2>
      </div>
      <div className="programCourse-wrapper">
        {card.map((x) => (
          <div className="programCourse-card" key={x.id}>
            <div className="programCourse-img">
              <img
                src="https://static.wixstatic.com/media/nsplsh_8a1fda874d084a71b4b42cbe45782e77~mv2.jpg/v1/fill/w_448,h_592,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Muhammad%20Faiz%20Zulkeflee.jpg"
                alt=""
              />
            </div>
            <div className="programCourse-content">
              <h4>{x.title}</h4>
              <div className="programCourse-duration">
                <ul>
                  <li>
                    <b>Duration:</b> 12-24 months
                  </li>
                  <li>
                    <b>Format:</b> Online + Optional Campus Immersion
                  </li>
                  <li>
                    <b>Career Roles:</b> Manager, Consultant, Strategist,
                    Entrepreneur
                  </li>
                </ul>
                <Link href={x.link}>
                  {" "}
                  <button>Learn More</button>
                </Link>
              </div>
              <p>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCourses;
