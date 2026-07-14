import React, { useState, useEffect, useMemo } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaChevronDown } from "react-icons/fa";
import "./Header.css";
import img from "../../images/15.jpeg";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";
import { useTheme } from "../../context/ThemeContext";
import CV from "../../assets/BurakFevziKar-CV-2025.pdf";

const Header = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  const titles = useMemo(
    () => ({
      en: [
        "AI Engineer",
        "Agentic AI Developer",
        "Full Stack Developer",
        "Conversational AI Developer",
        "Game Developer",
      ],
      tr: [
        "AI Mühendisi",
        "Agentic AI Geliştirici",
        "Full Stack Geliştirici",
        "Konuşma Tabanlı AI Geliştirici",
        "Oyun Geliştirici",
      ],
    }),
    []
  );

  const heroChips = ["AI Agents", "LLMs", "MCP", "RAG", "Chatbots"];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseTime = 1600;

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
        <div className="avatar-ring">
          <img src={img} alt="Burak Fevzi Kar" className="profile-photo" />
        </div>

        <span className="hero-badge">
          <span className="pulse-dot" />
          {language === "en"
            ? "Building with AI & Agents"
            : "AI & Ajanlarla Üretiyor"}
        </span>

        <h1 className="hero-title">
          {language === "en" ? "Hello, I'm" : "Merhaba, Ben"}{" "}
          <span className="gradient-text">Burak Fevzi KAR</span>
        </h1>

        <div className="typewriter-container">
          <p className="typewriter-text">{displayedText || " "}</p>
        </div>

        <div className="hero-chips">
          {heroChips.map((chip, i) => (
            <span key={i} className="hero-chip" style={{ animationDelay: `${i * 0.15}s` }}>
              {chip}
            </span>
          ))}
        </div>

        <div className="hero-actions">
          <a
            href={CV}
            download="BurakFevziKar-CV-2025"
            className={`cv-button ${isDownloading ? "downloading" : ""}`}
            onClick={handleDownloadClick}
          >
            {isDownloading
              ? language === "en"
                ? "📄 Downloading..."
                : "📄 İndiriliyor..."
              : (
                <>
                  <span>📄</span> {translations[language].cv}
                </>
              )}
          </a>
          <button
            className="contact-cta"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {language === "en" ? "Get in Touch" : "İletişime Geç"}
          </button>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/burak-fevzi-kar-2903b3201/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/burakfevzikar53"
            target="_blank"
            rel="noreferrer"
            className="github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/burakfevzikar"
            target="_blank"
            rel="noreferrer"
            className="instagram"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <button
        className="scroll-indicator"
        aria-label={language === "en" ? "Scroll down" : "Aşağı kaydır"}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <FaChevronDown />
      </button>
    </header>
  );
};

export default Header;
