import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "./logo.png"; // Placeholder image

const Home = () => {
  const carouselItems = [
    "Annual Sports Day - Celebrating Excellence in Sports",
    "Science Exhibition - Showcasing Student Innovations",
    "Cultural Fest - Embracing Diversity and Creativity",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <img src={logo} alt="School Logo" className="mx-auto w-32 h-32" />
        <h1 className="text-4xl font-bold mt-4">Springdale Public School</h1>
        <p className="text-xl mt-2">
          Welcome to Springdale Public School, where we nurture young minds for
          a brighter future.
        </p>
      </div>

      <div className="mt-8">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-blue-600 dark:bg-gray-800 text-white rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold">{item}</h2>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/about"
          className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="mt-2">
            Learn more about our school's history and mission.
          </p>
        </Link>
        <Link
          to="/admissions"
          className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          <h3 className="text-xl font-bold">Admissions</h3>
          <p className="mt-2">Find out how to apply and join our community.</p>
        </Link>
        <Link
          to="/contact"
          className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="mt-2">
            Get in touch with us for any inquiries or support.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
