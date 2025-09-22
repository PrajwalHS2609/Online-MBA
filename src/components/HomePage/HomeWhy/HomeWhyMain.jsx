import React from "react";
import flexibility from "./../../../Images/HomeWhy/flexibility.gif";
import network from "./../../../Images/HomeWhy/networking.gif";
import global from "./../../../Images/HomeWhy/global.gif";
import career from "./../../../Images/HomeWhy/enhancedCareer.gif";
import spec from "./../../../Images/HomeWhy/spec.gif";
import tech from "./../../../Images/HomeWhy/tech.gif";
import learn from "./../../../Images/HomeWhy/learn.gif";
import recognition from "./../../../Images/HomeWhy/recognition.gif";
import cost from "./../../../Images/HomeWhy/cost.gif";
import geo from "./../../../Images/HomeWhy/geo.gif";

import Image from "next/image";
import "./HomeWhy.css";
const HomeWhyMain = () => {
  const card = [
    {
      id: 1,
      img: flexibility,
      title: "Flexibility of Learning ",
      description:
        "Online MBA programs provide adaptable schedules that allow learners to balance academic engagement with professional and personal responsibilities.",
    },
    {
      id: 2,
      img: geo,
      title: "Accessibility Across Geographies ",
      description:
        "These programs eliminate location barriers, enabling students to pursue quality education from leading universities without the necessity of relocation.",
    },
    {
      id: 3,
      img: cost,
      title: "Cost-Effectiveness ",
      description:
        "Online MBA courses often reduce expenses related to travel, accommodation, and campus facilities, making higher education more affordable.",
    },
    {
      id: 4,
      img: global,
      title: "Global Exposure ",
      description:
        "Many online MBA programs include international case studies, diverse peer groups, and guest lectures from global industry leaders.",
    },
    {
      id: 5,
      img: tech,
      title: "Integration of Technology ",
      description:
        " The use of digital platforms fosters interactive learning through simulations, virtual classrooms, and collaborative projects.",
    },
    {
      id: 6,
      img: career,
      title: "Career Advancement Opportunities ",
      description:
        "Professionals can upskill and pursue leadership roles while continuing their existing employment.",
    },

    {
      id: 7,
      img: spec,
      title: "Wide Range of Specializations ",
      description:
        "Online MBA programs often offer varied streams such as Finance, Marketing, Human Resources, Operations, and Data Analytics to suit different career objectives.",
    },

    {
      id: 8,
      img: learn,
      title: "Self-Paced Learning ",
      description:
        "Many programs incorporate asynchronous modules that allow learners to progress at a pace best suited to their learning styles.",
    },

    {
      id: 9,
      img: recognition,
      title: "Recognition and Accreditation ",
      description:
        "Reputed universities ensure that online MBA programs are well-recognized and accredited, offering qualifications equivalent to on-campus degrees.",
    },

    {
      id: 10,
      img: network,
      title: "Networking Opportunities ",
      description:
        "Online platforms foster professional connections across industries and regions, enhancing career prospects and collaborative opportunities.",
    },
  ];
  return (
    <div className="homeBenefits">
      <div className="homeBenefitsHead">
        <h2>
          Why <span>Online MBA</span>?
        </h2>
      </div>
      <div className="homeBenefitsMain">
        {card.map((x) => (
          <div className="homeBenefitsCard" key={x.id}>
            <div className="homeBenefitsCard-img">
              <Image src={x.img} alt="" />
            </div>
            <div className="homeBenefitsCard-Head">
              <h3>{x.title}</h3>
            </div>

            <div className="homeBenefitsCard-Content">
              <p>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWhyMain;
