import React from "react";
import "./Achievements.css";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { FaAward, FaStar, FaTrophy } from "react-icons/fa"; // İkonlar için react-icons
import cb from "../../images/cb.webp";
import sm from "../../images/sm98.webp";
import fe from "../../images/first.webp";
const Achievements = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const achievements = [
    {
      en: "Received 9.8/10 from my team in Scrum Master Evaluation (09/2023)",
      tr: "Scrum Master Değerlendirmesi'nde takımımdan 9.8/10 aldı (09/2023)",
      icon: <FaStar className="achievement-icon" />,
      image: sm,
    },
    {
      en: "Received 'The Best Chatbot Technology Award' of Martech (02/2023)",
      tr: "Martech tarafından 'En İyi Chatbot Teknolojisi Ödülü'nü aldı (02/2023)",
      icon: <FaTrophy className="achievement-icon" />,
      image: cb,
    },
    {
      en: "Ranked 1st in faculty of Computer Engineering at the university (2019)",
      tr: "Üniversitede Bilgisayar Mühendisliği fakültesinde 1. sırada yer aldı (2019)",
      icon: <FaAward className="achievement-icon" />,
      image: fe,
    },
  ];

  return (
    <section
      id="achievements"
      className={`achievements ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <h2 className="achievements-title">
        {language === "en" ? "Achievements" : "Başarılar"}
      </h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            {item.icon}
            <p>{item[language]}</p>
            <img src={item.image} alt={item[language]} className="achievement-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
