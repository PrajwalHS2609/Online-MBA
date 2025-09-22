"use client";
import "./HomeTestimonial.css";
import Carousel from "react-bootstrap/Carousel";
import quote from "@/Images/double-quotes.png";
import Image from "next/image";
import { useState } from "react";
const HomeTestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homeTestimonialCarousel">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />

          <p>
            R18 Education made my Online MBA admission at Amity University
            seamless and stress-free. From clarifying course details to guiding
            me through documentation, their team was always available with clear
            and timely support. I felt confident in my decision, and today, I’m
            proud to be part of Amity’s MBA program. Highly recommend R18
            Education for anyone looking for trusted guidance!
          </p>
          <h3>Vivek Dhar</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />

          <p>
            I was confused about choosing the right university for my Online
            MBA, but R18 Education guided me step by step. Their counselors
            explained everything about VIT’s Online MBA program, from
            specialization options to career prospects. The admission process
            was smooth, and I received constant updates. Thanks to R18, I’m now
            pursuing my MBA at VIT with confidence.
          </p>
          <h3>Madhuri Pochamreddy</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            Applying for an Online MBA at Manipal felt overwhelming at first,
            but R18 Education made the process simple and transparent. Their
            expertise, quick responses, and personalized support helped me
            secure admission without any hassle. I truly appreciate their
            dedication to helping students achieve their goals. If you’re
            planning for 2025 admissions, R18 is the right choice!
          </p>
          <h3>Manish Verma</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            R18 Education made my Online MBA admission at Amity University
            incredibly smooth. Their team patiently guided me through every
            step, clarified my doubts, and ensured I submitted everything on
            time. Thanks to their support, I’m now pursuing my MBA at Amity with
            full confidence. Truly a reliable partner for higher education
            guidance!
          </p>
          <h3>Devaiah Bopanna</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            I wanted to pursue an Online MBA from VIT but was unsure about the
            admission process. R18 Education not only explained the program
            details clearly but also helped me choose the right specialization.
            Their timely updates and expert advice made everything easy. I’m
            grateful for their guidance and highly recommend them to anyone
            planning for 2025 admissions.
          </p>
          <h3>Ashish Singh</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            Just completed my A1 level Spanish speaking class with Prizma
            Academy. It was really good the way they took the classes and
            explained all basics about Spanish language. The faculties are
            really good and helpful. Since I am working, my classes were held
            only on weekends. This is a really good institute for learning
            foreign language. You do not get a course completion certificate
            from the institute at the end of the course (level). They will give
            you a certificate confirming you've joined the course. For course
            completion certificate you need to write Delle exam.
          </p>
          <h3>Karthik Kamath</h3>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeTestimonialCarousel;
