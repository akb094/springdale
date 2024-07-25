import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Springdale Public School
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/academics" className="hover:text-gray-300">
            Academics
          </Link>
          <Link to="/admissions" className="hover:text-gray-300">
            Admissions
          </Link>
          <Link to="/faculty" className="hover:text-gray-300">
            Faculty
          </Link>
          <Link to="/students" className="hover:text-gray-300">
            Students
          </Link>
          <Link to="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 text-gray-800 p-2 rounded-full focus:outline-none"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
