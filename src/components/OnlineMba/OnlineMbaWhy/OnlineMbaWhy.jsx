import React from "react";
import "./OnlineMbaWhy.css";
import { FaUserCheck, FaUsers, FaChartLine, FaLightbulb } from "react-icons/fa6";

const OnlineMbaWhy = () => {
  const reasons = [
    {
      icon: <FaUserCheck />,
      title: "Aligning with Your Interests",
      desc: "If you have a genuine interest in a specific domain, it’s important to channel your skills and passion into that area. Research which universities offer strong programmes in your field of interest and choose the one that best supports your career aspirations.",
    },
    {
      icon: <FaUsers />,
      title: "Building a Strong Professional Network",
      desc: "Your connections will become valuable assets as you progress in your career. The right specialisation often opens doors to industry-specific networking opportunities, helping you interact with like-minded professionals, alumni, and experts in your domain.",
    },
    {
      icon: <FaChartLine />,
      title: "Gaining Practical, In-Demand Skills",
      desc: "Employers seek candidates with relevant, job-ready skills. A focused MBA equips you with the technical expertise and practical knowledge needed to perform effectively and deliver results in your chosen industry.",
    },
    {
      icon: <FaLightbulb />,
      title: "Making Future-Oriented Decisions",
      desc: "When choosing your specialisation, consider long-term industry trends. Select an area with sustained demand and growth potential to ensure your skills remain valuable for years to come. Being a specialist rather than a generalist sets you apart as a subject matter expert — a quality highly prized in today’s competitive job market.",
    },
  ];

  return (
    <div className="mbaSpecialization-container">
      <div className="mbaSpecialization-header">
        <h2>
          Why Choosing the Right <span>MBA Specialization</span> Matters?
        </h2>
        <p>
          Choosing the right specialization in your MBA programme plays a vital
          role in shaping your career direction and long-term professional
          success. While a general MBA provides a broad understanding of
          business operations, selecting a focused specialization gives you a
          competitive edge and helps you become an expert in your chosen field.
        </p>
        <h3>Here’s why selecting the right MBA specialization makes a difference:</h3>
      </div>

      <div className="specialization-grid">
        {reasons.map((item, index) => (
          <div className="specialization-card" key={index}>
            <div className="specialization-icon">{item.icon}</div>
            <div className="specialization-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineMbaWhy;
