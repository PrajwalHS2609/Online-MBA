
"use client"
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
            I have completed my German A1 and A2 levels. Its a very good
            institute to learn German with proper grammar knowledge. You will
            have a great learning experience which you will definitely not get
            with any other institutes. After finishing the first level itself
            you will be able to see the difference by comparing with other
            institute students. I will definitely recommend this institute to
            everyone who wants to learn German properly.
          </p>
          <h3>Vivek Dhar</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />

          <p>
            Hi everyone, We where as family are relocating to Germany next
            month. We where actually very worried how to go about with the
            language. We took up a course at Prizma…me and my 6 year old son.
            The training was very good. We have really grown a lot in the
            language. The training center gives us good time and have are very
            understanding. Aruna mam is very excellent teacher. Pls go ahead wit
            the course here….thanks a lot.
          </p>
          <h3>Madhuri Pochamreddy</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            Prizma is really very good for foreign language. Its really worth to
            join. I Have competed German A1 and also going to start A. Trainers
            are very good and very understanding. I really appreciate there
            audio and video facility for the students.
          </p>
          <h3>Manish Verma</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            I attended German A1 and A2 at Prizma. I am quite satisfied with my
            progress I have made. The German instructor is quite knowledgeable
            with regards to the language. The only issue I found during my time,
            was that the classes only ran for 1-2 hours. But regardless, I am
            thankful for the effort everyone at Prizma academy.
          </p>
          <h3>Devaiah Bopanna</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            I have done till B1 level of German language here and must say they
            are really expertise in this . Kudos to entire team of Prizma . A
            genuine feedback have a little more flexibility in timings as being
            a working professional sometime it becomes a little challenging to
            manage office also. Otherwise highly recommend to all looking for a
            good linguistic learning. Good luck
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
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            One of the best institute for german course, i did my A2 course
            online, and i have passed my A2 exam with really good marks. The
            faculty is really great, i was in contact with Mr. Sahil and he was
            very helpful, he would often take input from me on how the classes
            are going and if i needed any support. I also had a really nice
            teacher, she was very smart, had lot of patience and gave regular
            excercises to practice, and always flexible with the timings, since
            i am working full time i had to do class in the free time and
            weekends. Quite expensive but it's worth it.
          </p>
          <h3>Koushik Hemmanahalli</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            Approached the institute for my Daughter's French Classes and the
            results were phenomenal. Really impressed with the Facilities &
            Commitment of the Staff. Sahil personally keeps a track of progress
            and has been giving valuable inputs as how to progress at every
            stage. Highly recommended.
          </p>
          <h3>Ajith Kappil</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            Good faculties, finished till German B1 level with them. Learning
            with lot of fun activities. Thanks to my trainers and entire team
            here. Whatever days i could not attend classes due to office
            meetings they arranged for Online Classes, which was a great support
            being a working professional. Very flexible with timings also.
            Cheers
          </p>
          <h3>Tejaram Sencha</h3>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={quote} alt="" />
          <br />
          <br />
          <p>
            Superb enviornment for Language Learning , me and my friend
            completed German Language Classes here as we had a plan to move to
            Munich by Jan . Kudos to entire team
          </p>
          <h3>Sharath Kumar Kannan</h3>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeTestimonialCarousel;
