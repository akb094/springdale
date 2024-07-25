import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">About Us</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">History</h2>
        <p className="text-gray-700">
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Vision</h2>
        <p className="text-gray-700">
          To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Mission</h2>
        <p className="text-gray-700">
          To empower students with the knowledge, skills, and values needed to
          thrive in a dynamic world.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Principal's Message</h2>
        <p className="text-gray-700">
          At Springdale, we believe in nurturing the potential of every student
          and guiding them towards a successful future.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Infrastructure and Facilities
        </h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>
            Sports facilities including a playground, gymnasium, and swimming
            pool
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
