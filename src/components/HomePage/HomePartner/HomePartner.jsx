"use client"
import React, { useEffect, useState } from "react";
import "./HomePartner.css";
import Carousel from "react-multi-carousel";
import schienderLogo from "./../../../Images/partners/schiender.png";
import adobeLogo from "./../../../Images/partners/adobe.png";
import capegeminiLogo from "./../../../Images/partners/capegemini.png";
import ciscoLogo from "./../../../Images/partners/cisco.png";
import dellLogo from "./../../../Images/partners/dell.png";
import hpLogo from "./../../../Images/partners/hp.png";
import ibmLogo from "./../../../Images/partners/ibm.png";
import infosysLogo from "./../../../Images/partners/infosys.png";
import ltLogo from "./../../../Images/partners/lt.png";
import panasonicLogo from "./../../../Images/partners/panasonic.png";
import samsungLogo from "./../../../Images/partners/samsung.png";
import simensLogo from "./../../../Images/partners/simens.png";
import tataLogo from "./../../../Images/partners/tata.png";
import wiproLogo from "./../../../Images/partners/wipro.png";
import kpmgLogo from "./../../../Images/partners/kpmg.png";
import abbLogo from "./../../../Images/partners/abb.png";
import cognizantLogo from "./../../../Images/partners/cognizant.png";
import accentureLogo from "./../../../Images/partners/accenture.png";
import hclLogo from "./../../../Images/partners/hcl.png";
import delliotLogo from "./../../../Images/partners/delliot.png";
import unileverLogo from "./../../../Images/partners/unilever.png";
import eyLogo from "./../../../Images/partners/ey.png";
import dhlLogo from "./../../../Images/partners/dhl.png";
import nestleLogo from "./../../../Images/partners/nestle.png";
import shellLogo from "./../../../Images/partners/shell.png";
import pgLogo from "./../../../Images/partners/pg.png";
import Image from "next/image";
const HomePartner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth > 768); // Adjust the width as needed
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="homePartner-wrapper">
      <div className="homePartnerHead-container">
        <h2>Industry-Recognized Hiring <span>Partners</span></h2>
      </div>
      <div className="homePartnersCard">
        <div className="homePartnersCardContent">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={showDots}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="1s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <div className="homePartnersCardItem">
                <Image src={schienderLogo} alt="schiender Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={adobeLogo} alt="adobe Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image
                  src={capegeminiLogo}
                  alt="capegemini Logo"
                  
                />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={ciscoLogo} alt="cisco Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={dellLogo} alt="dell Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={hpLogo} alt="hp Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={ibmLogo} alt="ibm Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={infosysLogo} alt="infosys Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={ltLogo} alt="lt Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={panasonicLogo} alt="panasonic Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={simensLogo} alt="simens Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={samsungLogo} alt="samsung Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={tataLogo} alt="tata Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={wiproLogo} alt="wipro Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={kpmgLogo} alt="kpmg Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={abbLogo} alt="abb Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={hclLogo} alt="hcl Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={accentureLogo} alt="acc Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={delliotLogo} alt="delliot Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={unileverLogo} alt="uni Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={eyLogo} alt="ey Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={dhlLogo} alt="dhl Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={nestleLogo} alt="nestle Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={shellLogo} alt="shell Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={cognizantLogo} alt="cog Logo"  />
              </div>
            </div>
            <div>
              <div className="homePartnersCardItem">
                <Image src={pgLogo} alt="pg Logo"  />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
