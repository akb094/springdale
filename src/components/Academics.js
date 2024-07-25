import React from "react";

const Academics = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">Academics</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Primary (Grades 1-5)</h3>
          <p className="text-gray-700">
            English, Mathematics, Science, Social Studies, Art, Physical
            Education
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Secondary (Grades 6-10)
          </h3>
          <p className="text-gray-700">
            English, Mathematics, Science (Physics, Chemistry, Biology), Social
            Studies, Computer Science, Physical Education, Art
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Senior Secondary (Grades 11-12)
          </h3>
          <h4 className="text-lg font-semibold mb-1">Science Stream</h4>
          <p className="text-gray-700">
            Physics, Chemistry, Biology, Mathematics, Computer Science, English
          </p>
          <h4 className="text-lg font-semibold mt-2 mb-1">Commerce Stream</h4>
          <p className="text-gray-700">
            Accountancy, Business Studies, Economics, Mathematics, English
          </p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Teaching Methodologies</h2>
        <p className="text-gray-700">
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
        <p className="text-gray-700">
          Digital classrooms, interactive learning modules, and access to online
          educational platforms.
        </p>
      </div>
    </div>
  );
};

export default Academics;
