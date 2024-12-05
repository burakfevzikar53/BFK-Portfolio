import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <footer className={`footer ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <p>&copy; {language === "en" ? "2025 Burak Fevzi Kar. All Rights Reserved." : "2025 Burak Fevzi Kar. Tüm Hakları Gizlidir."}</p>
      <div className={`social-icons ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
        <a href="https://www.linkedin.com/in/burak-fevzi-kar-2903b3201/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/burakfevzikar53" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/burakfevzikar" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
