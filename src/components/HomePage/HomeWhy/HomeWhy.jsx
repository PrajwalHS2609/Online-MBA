import React from "react";
import "./HomeWhy.css";
import homeWhy from "@/Images/homeWhy.jpeg";
import Image from "next/image";
import checkMark from "@/Images/check.png";
const features = [
  "Flexible schedule & timings",
  "Affordable, premium options",
  "Wide range of courses",
  "Easy access to materials",
  "Job placements & career opportunities",
  "Advanced learning ecosystem",
  "Personalized learning approach",
  "Free career counseling",
  "Post-course career assistance",
];

const HomeWhy = () => {
  return (
    <div className="split-why">
      <div className="split-left">
        <Image src={homeWhy} alt="students" />
      </div>
      <div className="split-right">
        <h2>
          Why <span>Online MBA</span>?
        </h2>
        <ul>
          {features.map((f, i) => (
            <li key={i}>
              <Image src={checkMark} alt="check" /> {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeWhy;
