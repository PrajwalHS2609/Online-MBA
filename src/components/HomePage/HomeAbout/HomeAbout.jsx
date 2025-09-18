import React from "react";
import "./HomeAbout.css";
import homeAboutUs from "@/Images/homeAbtUs.jpeg"
import Image from "next/image";
const HomeAbout = () => {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-wrapper">
        <div className="homeAbout-content">
          <h2>About <span>Us</span></h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            quibusdam fugit impedit facere? Fuga nostrum mollitia nulla. Facilis
            reiciendis omnis officia quae accusamus repellendus, repellat et
            incidunt? Quis, aperiam vero! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Mollitia iure earum ab error
            perspiciatis expedita repellat quibusdam magni aut cum reiciendis,
            minima, quod laboriosam quis cumque, assumenda tempore et
            cupiditate!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
            ipsa. Repellat consequatur ipsum deleniti explicabo perspiciatis,
            natus necessitatibus debitis consequuntur excepturi molestias iste,
            sint a accusamus dolorum commodi deserunt ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            sapiente quo doloremque porro fugiat modi eum. Necessitatibus
            provident veritatis vero repudiandae deleniti quaerat dignissimos
            eligendi? Pariatur, iusto. Dolor, porro minus.
          </p>
        </div>
        <div className="homeAbout-content">
          <Image
            src={homeAboutUs}
            alt="homeAboutUs"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
