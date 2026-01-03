import React from "react";
import "./../UniversityPages.css";
import { FaGraduationCap, FaNetworkWired, FaSuitcase } from "react-icons/fa";
import { FaChalkboardUser, FaIndianRupeeSign } from "react-icons/fa6";
import { MdLaptopMac } from "react-icons/md";

const VitProgramme = () => {
  const programme = [
    { id: 1, icon: <FaGraduationCap />, title: "Globally Recognized Degree", description: "Earn an MBA degree from VIT, ranked among India's top 10 universities and recognized worldwide." },
    { id: 2, icon: <FaChalkboardUser />, title: "Expert Faculty", description: "Learn from the same renowned faculty who teach on-campus MBA programmes at VIT." },
    { id: 3, icon: <FaSuitcase />, title: "Career Advancement", description: "Designed for working professionals to upskill without career breaks." },
    { id: 4, icon: <MdLaptopMac />, title: "Flexible Learning", description: "Live online classes + recorded sessions to fit your schedule." },
    { id: 5, icon: <FaNetworkWired />, title: "Alumni Network", description: "Join the prestigious VIT alumni community with 100,000+ members worldwide." },
    { id: 6, icon: <FaIndianRupeeSign />, title: "Affordable Fees", description: "Premium education at affordable fees and flexible payment options." },
  ];
  return (
    <div className="universityProgramme-container">
      <h2><span>VIT</span> Online MBA</h2>
      <h4>MBA from India's top 10 universities</h4>
      <p>
        Empower your career journey with the online Master of Business
        Administration (MBA) Programme at Vellore Institute of Technology (VIT).
        Designed by esteemed faculty, this programme stands as a beacon for
        working professionals seeking rapid upskilling. As an esteemed and
        affordable choice from a top-tier institute, it seamlessly merges
        convenience with excellence.
      </p>
      <a href="">
        <button>Download Program Brochure</button>
      </a>
      <div className="universityProgramme-content">
        {programme.map((x) => (
          <div className="universityProgramme-item" key={x.id}>
            <span className="universityProgramme-icon">{x.icon}</span>
            <h4>{x.title}</h4>
            <p>{x.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
                
export default VitProgramme;
