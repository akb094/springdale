import React from "react";

const Admissions = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">Admissions</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Admission Process and Criteria
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Process:</strong> Admission forms are available for download.
          Submit the completed form along with required documents at the school
          office.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Criteria:</strong> Admission is based on merit and
          availability of seats. Entrance tests may be conducted for certain
          grades.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Downloadable Admission Forms
        </h2>
        <p className="text-gray-700">
          <a
            href="/path/to/admission-form.pdf"
            download
            className="text-blue-600 hover:underline"
          >
            Click here to download the admission form
          </a>
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Important Dates and Deadlines
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </div>
    </div>
  );
};

export default Admissions;
