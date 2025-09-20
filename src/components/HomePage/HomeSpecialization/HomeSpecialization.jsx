"use client";
import React from "react";
import "./HomeSpecialization.css";
import img from "@/Images/Untitled design (11).png";

import generalManagement from "@/Images/mbaSpecialization/General Management.png";
import finance from "@/Images/mbaSpecialization/Finance.png";
import marketing from "@/Images/mbaSpecialization/Marketing.png";
import hrManagement from "@/Images/mbaSpecialization/HR.png";
import operation from "@/Images/mbaSpecialization/Operations.png";
import it from "@/Images/mbaSpecialization/IT.png";
import supplyChain from "@/Images/mbaSpecialization/Supply Chain Management.png";
import dataAnalytics from "@/Images/mbaSpecialization/Data Analytics.png";
import businessAnalytics from "@/Images/mbaSpecialization/Business Analytics.png";
import hospitalityManagement from "@/Images/mbaSpecialization/Hospitality Management.png";
import intBusiness from "@/Images/mbaSpecialization/International Business.png";
import projectManagement from "@/Images/mbaSpecialization/Project Management.png";
import logistic from "@/Images/mbaSpecialization/Logistics & Supply Chain.png";
import intFinance from "@/Images/mbaSpecialization/International Finance.png";
import retailManagement from "@/Images/mbaSpecialization/Retail Management.png";
import iTFitech from "@/Images/mbaSpecialization/IT & Fintech.png";
import fitechManagement from "@/Images/mbaSpecialization/Fintech.png";

import dataScience from "@/Images/mbaSpecialization/Data Science.png";
import healthCare from "@/Images/mbaSpecialization/Healthcare.png";
import banking from "@/Images/mbaSpecialization/Banking.png";
import marketingHmr from "@/Images/mbaSpecialization/Marketing & HRM.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
const HomeSpecialization = () => {
  const serviceData = [
    {
      id: 1,
      img: generalManagement,
      link: "/",
      serviceName: "MBA",
      para: "( General Management )",
    },
    {
      id: 2,
      img: finance,

      link: "/",
      serviceName: "MBA",
      para: "( Finance )",
    },
    {
      id: 3,
      img: marketing,

      link: "/",
      serviceName: "MBA",
      para: "( Marketing )",
    },
    {
      id: 4,
      img: hrManagement,

      link: "/",
      serviceName: "MBA",
      para: "( HR Management )",
    },
    {
      id: 5,
      img: operation,

      link: "/",
      serviceName: "MBA",
      para: "( Operation )",
    },
    {
      id: 6,
      img: it,

      link: "/",
      serviceName: "MBA",
      para: "( Information Technology )",
    },
    {
      id: 7,
      img: supplyChain,

      link: "/",
      serviceName: "MBA",
      para: "( Supply Chain Management )",
    },
    {
      id: 8,
      img: dataAnalytics,

      link: "/",
      serviceName: "MBA",
      para: "( Data Analytics )",
    },
    {
      id: 9,
      img: businessAnalytics,

      link: "/",
      serviceName: "MBA",
      para: "( Business Analytics )",
    },

    {
      id: 10,
      img: hospitalityManagement,

      link: "/",
      serviceName: "MBA",
      para: "( Hospitality Management )",
    },
    {
      id: 11,
      img: intBusiness,

      link: "/",
      serviceName: "MBA",
      para: "( International Business )",
    },
    {
      id: 12,
      img: projectManagement,

      link: "/",
      serviceName: "MBA",
      para: "( Project Management )",
    },
    {
      id: 13,
      img: logistic,

      link: "/",
      serviceName: "MBA",
      para: "( Logistic and Supply Chain )",
    },
    {
      id: 14,
      img: intFinance,

      link: "/",
      serviceName: "MBA",
      para: "( International Finance )",
    },
    {
      id: 15,
      img: retailManagement,

      link: "/",
      serviceName: "MBA",
      para: "( Retail Management  )",
    },
    {
      id: 16,
      img: iTFitech,

      link: "/",
      serviceName: "MBA",
      para: "( IT and Fintech )",
    },
    {
      id: 17,
      img: fitechManagement,

      link: "/",
      serviceName: "MBA",
      para: "( Fintech Management )",
    },
    {
      id: 18,
      img: dataScience,

      link: "/",
      serviceName: "MBA",
      para: "( Data Science and Analytics )",
    },
    {
      id: 19,
      img: healthCare,

      link: "/",
      serviceName: "MBA",
      para: "( Healthcare and Hospital )",
    },
    {
      id: 20,
      img: banking,

      link: "/",
      serviceName: "MBA",
      para: "( Banking and Finance )",
    },
    {
      id: 21,
      img: marketingHmr,

      link: "/",
      serviceName: "MBA",
      para: "( Marketing and HRM )",
    },
  ];
  return (
    <div className="homeService-container">
      <div className="homeServiceHead-container">
        <h2>
          <span>MBA</span> Specialization
        </h2>
        <p>
          Choosing the right specialization is a vital step in bridging academic
          learning with career ambitions. Universities offer structured
          knowledge and practical skills that equip learners with expertise,
          enabling them to excel and stand out in today’s highly competitive
          corporate landscape.
        </p>
      </div>{" "}
      <div className="homeServiceMain-container">
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            // Swiper-specific configuration
            onSwiper={(swiper) => {
              swiper.loopedSlides = 12; // Dynamically set loopedSlides on the Swiper instance
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // 1 slide per view on small screens (e.g., mobile)
              },
              768: {
                slidesPerView: 2, // 2 slides per view on medium screens (e.g., tablets)
              },
              1024: {
                slidesPerView: 3, // 3 slides per view on large screens (e.g., desktop)
              },
            }}
          >
            {serviceData.map((x) => (
              <SwiperSlide key={x.id}>
                <div className="homeServiceMain-cardContainer" key={x.id}>
                  <Link href={x.link}>
                    {/* <div className="homeServiceMain-cardCover">
                      <div className="homeServiceMain-cardPara">
                        <h3>
                          {x.serviceName} {x.para}
                        </h3>
                        <p>{x.serviceDescription}</p>
                      </div>
                    </div> */}
                    <div className="homeServiceMain-cardImg">
                      <Image src={x.img} alt={x.serviceName} loading="lazy" />
                    </div>
                    <div className="homeServiceMain-cardHead">
                      <h5>{x.serviceName}</h5>
                      <b>{x.para}</b>
                      {/* <h3>{x.serviceName2}</h3> */}
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>{" "}
    </div>
  );
};

export default HomeSpecialization;
