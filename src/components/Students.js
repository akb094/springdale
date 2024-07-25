import React from "react";
import { studentLife } from "../data";

const Students = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">
        Life at Springdale
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-4">
            Extracurricular Activities
          </h2>
          <ul className="list-disc pl-6">
            {studentLife.extracurricularActivities.map((activity, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {activity}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-4">Clubs and Societies</h2>
          <ul className="list-disc pl-6">
            {studentLife.clubsAndSocieties.map((club, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {club}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <ul className="list-disc pl-6">
            {studentLife.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">
              <strong>President:</strong> {studentLife.studentCouncil.president}
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Vice President:</strong>{" "}
              {studentLife.studentCouncil.vicePresident}
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Secretary:</strong> {studentLife.studentCouncil.secretary}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Students;
