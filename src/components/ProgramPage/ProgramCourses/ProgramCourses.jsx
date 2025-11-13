import React from "react";
import "./ProgramCourses.css";
import Link from "next/link";
const ProgramCourses = () => {
  const card = [
    {
      id: 1,
      title: "MBA (General Management)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-general-management",
    },
    {
      id: 2,
      title: "MBA (Finance)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-finance",
    },
    {
      id: 3,
      title: "MBA (Marketing)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-marketing",
    },
    {
      id: 4,
      title: "MBA (HR Management)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-hr-management",
    },
    {
      id: 5,
      title: "MBA (Information Technology)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-information-technology",
    },
    {
      id: 6,
      title: "MBA (Operation)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-business-operation",
    },
    {
      id: 7,
      title: "MBA (Supply Chain Management)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-supply-chain-management",
    },
    {
      id: 8,
      title: "MBA (Data Analytics)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-data-analytics",
    },
    {
      id: 9,
      title: "MBA (Business Analytics)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 10,
      title: "MBA (Hospitality Management)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-hospitality-management",
    },
    {
      id: 11,
      title: "MBA (International Business)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-international-business",
    },
    {
      id: 12,
      title: "MBA (Project Management)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 13,
      title: "MBA (Logistic and Supply Chain )",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-logistics-and-supply-chain",
    },
    {
      id: 14,
      title: "MBA (International Finance)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 15,
      title: "MBA (Retail Management)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-retail-management",
    },
    {
      id: 16,
      title: "MBA (IT and Fintech )",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 17,
      title: "MBA (Fintech Management)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-fintech-management ",
    },
    {
      id: 18,
      title: "MBA (Data Science and Analytics)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 19,
      title: "MBA (Healthcare and Hospital)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-healthcare-management",
    },
    {
      id: 20,
      title: "MBA (Banking and Finance)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/",
    },
    {
      id: 21,
      title: "MBA (Marketing and HRM)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-in-marketing-and-hrm",
    },
    {
      id: 22,
      title: "MBA (Master of Business Administration)",
      description:
        "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
      link: "/online-mba-course-admission",
    },
    // {
    //   id: 23,
    //   title: "MBA (Master of Business Administration)",
    //   description:
    //     "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
    //   link: "/",
    // },
    // {
    //   id: 24,
    //   title: "MBA (Master of Business Administration)",
    //   description:
    //     "Accelerate your leadership journey with an accredited online MBA. Choose from top specializations like Finance, Marketing,  HR, Analytics, and more.",
    //   link: "/",
    // },
  ];
  return (
    <div className="programCourse-container">
      <div className="programCourse-head">
        <h2>
          Unlock Your Career Potential — 100% <span>Online Programs</span>
        </h2>
      </div>

      {/* one container for all items */}
      <div className="mba-container">
        {card.map((x, i) => (
          <div className="mba-item" key={i}>
            <Link href={x.link}>{x.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCourses;
