import Image from "next/image";
import Link from "next/link";
import React from "react";
import aicte from "@/Images/Approved/AICTE.png"
import naac from "@/Images/Approved/NAAC.png"
import nirf from "@/Images/Approved/NIRF.png"
import qaa from "@/Images/Approved/QAA.png"
import ugc from "@/Images/Approved/UGC.png"
import wes from "@/Images/Approved/WES.png"

import "./HomeAcc.css";
const HomeAcc = () => {
  const card = [
    {
      id: 1,
      img:aicte,
      name: "AICTE",
      link: "",
    },
    {
      id: 2,
      img:naac,
      name: "NAAC",
      link: "",
    },
    {
      id: 3,
      img:nirf,
      name:"NIRF",
      link: "",
    },
    {
      id: 4,
      img:qaa,
      name: "QAA",
      link: "",
    },
    {
      id: 5,
      img:ugc,
      name: "UGC",
      link: "",
    },
    {
      id: 6,
      img:wes,
      name: "WES",
      link: "",
    },
  ];
  return (
    <div className="homeAccMain-container">
      <div className="homeAccHead-container">
        <h2>Our <span>Accreditation</span></h2>
      </div>{" "}
      <div className="homeAcc-container">
        {card.map((x) => (
          <div className="homeAcc-cardContainer" key={x.id}>
            <Image src={x.img} alt={x.name} />
            <div className="homeAcc-cardCover"></div>
            <div className="homeAcc-cardName">
              <h3>
                <Link href={x.link}>{x.name}</Link>
              </h3>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default HomeAcc;
