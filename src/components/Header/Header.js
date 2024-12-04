import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Header.css";
import img from "../../images/15.jpeg";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";
import { useTheme } from "../../context/ThemeContext";
import CV from "../../assets/BurakFevziKar-CV-2025.pdf";
const Header = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isDownloading, setIsDownloading] = useState(false); // İndirme animasyonu durumu

  const handleDownloadClick = () => {
    setIsDownloading(true); // Animasyonu başlat
    setTimeout(() => {
      setIsDownloading(false); // Animasyonu bitir
    }, 2000); // 2 saniyelik animasyon
  };
  const titles = {
    en: ["Full Stack Developer", "Backend Developer", "Frontend Developer", "Game Developer"],
    tr: ["Full Stack Geliştirici", "Backend Geliştirici", "Frontend Geliştirici", "Game Developer"],
  };

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; 
  const deletingSpeed = 100; 
  const pauseTime = 1500;

  useEffect(() => {
    const fullText = titles[language][currentTitleIndex];
    let timeout;

    if (!isDeleting && displayedText !== fullText) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText !== "") {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayedText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles[language].length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, language, titles]);

  return (
    <header
      id="header"
      className={`header ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <div className="header-content">
        <div className="image-card">
          <img src={img} alt="My Profile" className="profile-photo" />
        </div>
        <h1>{translations[language].header}</h1>
        <p className="typewriter-text">{displayedText}</p>
        <a href={CV} download="BurakFevziKar-CV-2025" className={`cv-button ${isDownloading ? "downloading" : ""}`} onClick={handleDownloadClick}>
        {isDownloading
            ? language === "en"
              ? "Downloading..."
              : "İndiriliyor..."
            : translations[language].cv}
        </a>
        <div className="social-icons">
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
      </div>
    </header>
  );
};

export default Header;
