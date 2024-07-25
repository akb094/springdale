import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = () => {
  return (
    <ResponsiveCarousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src="./image1.jpeg" alt="Annual Sports Day" />
        <p className="legend">
          Annual Sports Day - Celebrating Excellence in Sports
        </p>
      </div>
      <div>
        <img src="./image2.jpg" alt="Science Exhibition" />
        <p className="legend">
          Science Exhibition - Showcasing Student Innovations
        </p>
      </div>
      <div>
        <img src="./image3.jpeg" alt="Cultural Fest" />
        <p className="legend">
          Cultural Fest - Embracing Diversity and Creativity
        </p>
      </div>
    </ResponsiveCarousel>
  );
};

export default Carousel;
