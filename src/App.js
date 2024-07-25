import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "light");
  };

  return (
    <div className={theme}>
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
