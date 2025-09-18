"use client"
import React from "react";
import "./UniversitiesMarquee.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import manipal from "@/Images/UniversitiesImg/manipal.jpg";
import lpu from "@/Images/UniversitiesImg/lpu.jpg";
import jain from "@/Images/UniversitiesImg/jain.jpg";
import amity from "@/Images/UniversitiesImg/amity.jpg";
import nims from "@/Images/UniversitiesImg/nims.jpg";
import vit from "@/Images/UniversitiesImg/vit.png";
const UniversitiesMarquee = () => {
  const university = [
    {
      id: 1,
      name: "AMITY UNIVERSITY",
      img: amity,
      link: "australia-apostille-services-in-bangalore",
    },
    { id: 2, name: "LPU", img: lpu, link: "" },
    {
      id: 3,
      name: "JAIN UNIVERSITY",
      img: jain,
      link: "bahrain-embassy-attestation-in-bangalore",
    },
    {
      id: 4,
      name: "MANIPAL UNIVERSITY",
      img: manipal,
      link: "egypt-embassy-attestation-in-bangalore",
    },
    { id: 5, name: "NMIMS UNIVERSITY", img: nims, link: "" },
    { id: 6, name: "VIT", img: vit, link: "" },
  ];

    const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="homeUniversityMain-container">
      <div className="homeUniversityHead-container">
        <h2>
          India’s Top <span> Online MBA</span> Universities You Need to Know!
        </h2>
      </div>{" "}
      <div className="homeUniversity-container">
        <Marquee>
          {university.map((x) => (
            <div className="homeUniversity-marqueeCard" key={x.id}>
              <Link href={x.link}>
                <Image src={x.img} alt={x.name} />

                <div className="homeUniversity-marqueeCover">
                  <div className="homeUniversity-marqueeCoverContent">
                    <h3>{x.name}</h3>
                  </div>
                  <div className="homeUniversity-marqueeCoverContent">
                    <button onClick={handlePop}>Enroll Now</button>
                    <button>Brochure</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default UniversitiesMarquee;
