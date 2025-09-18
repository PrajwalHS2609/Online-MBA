"use client";
import React from "react";
import "./HomeSpecialization.css";
import img from "@/Images/Untitled design (11).png";
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
      img: img,
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tempora eligendi cumque ea laudantium. Facilis asperiores corrupti, molestias cumque laborum ad ex in quod, sit praesentium ullam laboriosam nesciunt obcaecati.",
      link: "/",
      serviceName: "MBA",
      para: "( General Management )",
    },
    {
      id: 2,
      img:  img,

      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tempora eligendi cumque ea laudantium. Facilis asperiores corrupti, molestias cumque laborum ad ex in quod, sit praesentium ullam laboriosam nesciunt obcaecati.",
      link: "/",
      serviceName: "MBA",
      para: "( Finance )",
    },
    {
      id: 3,
      img:  img,

      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tempora eligendi cumque ea laudantium. Facilis asperiores corrupti, molestias cumque laborum ad ex in quod, sit praesentium ullam laboriosam nesciunt obcaecati.",
      link: "/",
      serviceName: "MBA",
      para: "( Marketing )",
    },
    {
      id: 4,
      img:  img,

      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tempora eligendi cumque ea laudantium. Facilis asperiores corrupti, molestias cumque laborum ad ex in quod, sit praesentium ullam laboriosam nesciunt obcaecati.",
      link: "/",
      serviceName: "MBA",
      para: "( HR Management )",
    },
    {
      id: 5,
      img:  img,

      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae tempora eligendi cumque ea laudantium. Facilis asperiores corrupti, molestias cumque laborum ad ex in quod, sit praesentium ullam laboriosam nesciunt obcaecati.",
      link: "/",
      serviceName: "MBA",
      para: "( Operation )",
    },
  ];
  return (
    <div className="homeService-container">
      <div className="homeServiceHead-container">
        <h2>
          <span>MBA</span> Specialization
        </h2>
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
                    <div className="homeServiceMain-cardCover">
                      <div className="homeServiceMain-cardPara">
                        <h3>
                          {x.serviceName} {x.para}
                        </h3>
                        <p>{x.serviceDescription}</p>
                      </div>
                    </div>
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
