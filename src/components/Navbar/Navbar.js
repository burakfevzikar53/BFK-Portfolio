import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaBriefcase, FaTrophy, FaEnvelope } from "react-icons/fa";
import { BsFillProjectorFill } from "react-icons/bs";

const Navbar = ({ onAchievementsClick }) => {
  const [activeSection, setActiveSection] = useState("header");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });

    if (section === "achievements" && onAchievementsClick) {
      onAchievementsClick();
    }
  };

  // Scroll event listener ekleniyor
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["header", "about", "experience", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop - 50; // Biraz offset eklenebilir
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li
          className={activeSection === "header" ? "active" : ""}
          onClick={() => handleSectionClick("header")}
        >
          <FaHome />
        </li>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => handleSectionClick("about")}
        >
          <FaUser />
        </li>
        <li
          className={activeSection === "experience" ? "active" : ""}
          onClick={() => handleSectionClick("experience")}
        >
          <FaBriefcase />
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleSectionClick("projects")}
        >
          <BsFillProjectorFill />
        </li>
        <li
          className={activeSection === "achievements" ? "active" : ""}
          onClick={() => handleSectionClick("achievements")}
        >
          <FaTrophy />
        </li>
        <li
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => handleSectionClick("contact")}
        >
          <FaEnvelope />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
