import React from "react";
import "./OnlineMbaUniversities.css";
import Image from "next/image";
import manipal from "@/Images/UniversitiesImg/manipal.jpg";
import vit from "@/Images/UniversitiesImg/vit.png";
import jain from "@/Images/UniversitiesImg/jain.jpg";
import amity from "@/Images/UniversitiesImg/amity.jpg";
import nims from "@/Images/UniversitiesImg/nims.jpg";
const OnlineMbaUniversities = () => {
  const card = [
    { id: 1, img: vit, title: "VIT" },
    { id: 2, img: jain, title: "Jain University" },
    { id: 3, img: amity, title: "Amity University" },
    { id: 4, img: nims, title: "NMIMS University" },
    { id: 5, img: manipal, title: "Mainpal university" },
  ];
  return (
    <div className="universities-container">
      <div className="universities-headContainer">
        <h2>
          Best Universities for <span>Online MBA</span>
        </h2>
      </div>

      <div className="universities-content">
        {card.map((x) => (
          <div className="universities-card">
            <div className="universities-cardImg">
              <Image src={x.img} alt={x.title} />
            </div>

            <div className="universities-cardContent">
              <h3>{x.title}</h3>

              <div className="uni-stats">
                <div className="uni-stat">
                  <span className="stat-icon">⭐</span>
                  <span className="stat-label">Rating:</span>
                  <span className="stat-value">4.2 / 5</span>
                  <span className="stat-extra">(120 reviews)</span>
                </div>

                <div className="uni-stat">
                  <span className="stat-icon">💰</span>
                  <span className="stat-label">Fees:</span>
                  <span className="stat-value">₹1,50,000</span>
                  <span className="stat-extra">(2 Years)</span>
                </div>

                <div className="uni-stat">
                  <span className="stat-icon">📌</span>
                  <span className="stat-label">Opted:</span>
                  <span className="stat-value">1790+</span>
                  <span className="stat-extra">last month</span>
                </div>
              </div>

              <button className="uni-btn">Know More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineMbaUniversities;
