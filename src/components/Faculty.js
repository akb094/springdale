// src/Faculty.js

import React from "react";
import { facultyProfiles } from "../data";

const Faculty = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">Faculty Profiles</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facultyProfiles.map((profile, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
            <p className="text-gray-700 mb-2">{profile.title}</p>
            <p className="text-gray-700 mb-2">
              <strong>Qualifications:</strong> {profile.qualifications}
            </p>
            <p className="text-gray-700">
              <strong>Experience:</strong> {profile.experience}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
