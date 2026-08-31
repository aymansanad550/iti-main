import React, { useEffect, useRef } from "react";
// Import Swiper web components
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import bannerHero1 from "../img/banner_smartphone.jpg";
import bannerHero2 from "../img/banner_laptop.jpg";
import bannerHero3 from "../img/banner_accessories.jpg";

// Register Swiper web components
register();

function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <swiper-container
            loop="true"
            autoplay-delay="2500"
            autoplay-disable-on-interaction="false"
            pagination="true"
            class="mySwiper"
          >
            <swiper-slide>
              <div className="content">
                <h4>Latest Tech</h4>
                <h3>
                  Premium <br /> Smartphones{" "}
                </h3>
                <p>Discover the new era of mobile.</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={bannerHero1} alt="slider hero 1" />
            </swiper-slide>

            <swiper-slide>
              <div className="content">
                <h4>Power & Performance</h4>
                <h3>
                  Next-Gen <br /> Laptops{" "}
                </h3>
                <p>Supercharged for professionals.</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={bannerHero2} alt="slider hero 2" />
            </swiper-slide>

            <swiper-slide>
              <div className="content">
                <h4>Everyday Essentials</h4>
                <h3>
                  Smart <br /> Accessories{" "}
                </h3>
                <p>Watches, Earbuds & more.</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={bannerHero3} alt="slider hero 3" />
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
