import React from "react";
import "./TopUniversitiesCard.css";
import Image from "next/image";
import manipal from "@/Images/UniversitiesImg/manipal.jpg";
import vit from "@/Images/UniversitiesImg/vit.png";
import jain from "@/Images/UniversitiesImg/jain.jpg";
import amity from "@/Images/UniversitiesImg/amity.jpg";
import nims from "@/Images/UniversitiesImg/nims.jpg";
import Link from "next/link";
const TopUniversitiesCard = () => {
  const card = [
    {
      id: 1,
      img: vit,
      title: "VIT",
      reviews: "6021+",
      rating: "4.3",
      opted: "51,740+",
      fees: "₹1,80,000",
      link: "/2026-vit-online-mba-admission-for-working-professionals",
    },
    {
      id: 2,
      img: jain,
      title: "Sikkim Manipal University",
      reviews: "428+",
      rating: "4.0",
      opted: "4,263+",
      fees: "₹1,10,000",
      link: "/",
    },
    {
      id: 3,
      img: amity,
      title: "Amity University",
      reviews: "1000+",
      rating: "4.1",
      opted: "10,000+",
      fees: "₹1,99,000",
      link: "/",
    },
    {
      id: 4,
      img: nims,
      title: "NMIMS University",
      reviews: "2962+",
      rating: "4.0",
      opted: "8,326+",
      fees: "₹2,20,000",
      link: "/",
    },
    {
      id: 5,
      img: manipal,
      title: "Manipal University",
      reviews: "2,230+",
      rating: "4.5",
      opted: "24,500+",
      fees: "₹1,75,000",
      link: "/",
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
                  <span className="stat-value">{x.fees}</span>
                  <span className="stat-extra"></span>
                </div>

                <div className="uni-stat">
                  <span className="stat-icon">📌</span>
                  <span className="stat-label">Admission:</span>
                  <span className="stat-value">{x.opted}</span>
                  <span className="stat-extra"></span>
                </div>
              </div>

              <Link href={x.link}>
                {" "}
                <button className="uni-btn">Know More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUniversitiesCard;
