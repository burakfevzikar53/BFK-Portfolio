import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={`footer ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <p className="footer-tagline">
        {language === "en"
          ? "Crafted with React — powered by curiosity & AI ✦"
          : "React ile üretildi — merak ve yapay zeka ile güçlendirildi ✦"}
      </p>
      <p>
        &copy;{" "}
        {language === "en"
          ? `${year} Burak Fevzi Kar. All Rights Reserved.`
          : `${year} Burak Fevzi Kar. Tüm Hakları Saklıdır.`}
      </p>
      <div className={`social-icons ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
        <a href="https://www.linkedin.com/in/burak-fevzi-kar-2903b3201/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/burakfevzikar53" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://instagram.com/burakfevzikar" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
