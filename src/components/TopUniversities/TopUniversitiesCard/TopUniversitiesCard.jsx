import React from "react";
import "./TopUniversitiesCard.css";
import Image from "next/image";
import manipal from "@/Images/UniversitiesImg/manipal.jpg";
import vit from "@/Images/UniversitiesImg/vit.png";
import jain from "@/Images/UniversitiesImg/jain.jpg";
import amity from "@/Images/UniversitiesImg/amity.jpg";
import nims from "@/Images/UniversitiesImg/nims.jpg";
const TopUniversitiesCard = () => {
  const card = [
    {
      id: 1,
      img: vit,
      title: "VIT",
      reviews: "6021+",
      rating: "4.3",
      opted: "51,740",
    },
    {
      id: 2,
      img: jain,
      title: "Jain University",
      reviews: "2,794+",
      rating: "4.0",
      opted: "21,650",
    },
    {
      id: 3,
      img: amity,
      title: "Amity University",
      reviews: "1000+",
      rating: "4.1",
      opted: "10,000",
    },
    {
      id: 4,
      img: nims,
      title: "NMIMS University",
      reviews: "2962+",
      rating: "4.0",
      opted: "8,326",
    },
    {
      id: 5,
      img: manipal,
      title: "Mainpal university",
      reviews: "2,230+",
      rating: "4.5",
      opted: "24,500",
    },
  ];
  return (
    <div className="universities-container">
      <div className="universities-headContainer">
        <h2>
          Top Universities for <span>Online MBA</span>
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
                  <span className="stat-value">{x.rating} / 5</span>
                  <span className="stat-extra">({x.reviews})</span>
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
                  <span className="stat-value">{x.opted}</span>
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

export default TopUniversitiesCard;
