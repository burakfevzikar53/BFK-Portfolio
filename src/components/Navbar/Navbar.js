import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaBrain, FaBriefcase, FaTrophy, FaEnvelope } from "react-icons/fa";
import { BsFillProjectorFill } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = ({ onAchievementsClick }) => {
  const [activeSection, setActiveSection] = useState("header");
  const { language } = useLanguage();

  const navItems = [
    { id: "header", icon: <FaHome />, label: { en: "Home", tr: "Ana Sayfa" } },
    { id: "about", icon: <FaUser />, label: { en: "About", tr: "Hakkımda" } },
    { id: "skills", icon: <FaBrain />, label: { en: "Skills", tr: "Yetenekler" } },
    { id: "experience", icon: <FaBriefcase />, label: { en: "Experience", tr: "Deneyim" } },
    { id: "projects", icon: <BsFillProjectorFill />, label: { en: "Projects", tr: "Projeler" } },
    { id: "achievements", icon: <FaTrophy />, label: { en: "Achievements", tr: "Başarılar" } },
    { id: "contact", icon: <FaEnvelope />, label: { en: "Contact", tr: "İletişim" } },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });

    if (section === "achievements" && onAchievementsClick) {
      onAchievementsClick();
    }
  };

  useEffect(() => {
    const sections = ["header", "about", "skills", "experience", "projects", "achievements", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop - 120;
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
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => handleSectionClick(item.id)}
            data-label={item.label[language]}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
