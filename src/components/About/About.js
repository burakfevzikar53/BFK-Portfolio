import React, { useState, useEffect } from "react";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";
import { useTheme } from "../../context/ThemeContext";

const Counter = ({ endValue, duration }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const increment = Math.ceil(endValue / (duration / 50));

    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        clearInterval(interval);
        setValue(endValue);
      } else {
        setValue(startValue);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return <span>{value}+</span>;
};

const About = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const aboutMeText = {
    en: "Experienced Software Developer with 5+ years of expertise in Backend, Frontend, and Interactive Voice Response (IVR) systems. Demonstrates excellence across all stages of the software development lifecycle, from architectural design and coding to debugging, testing, and maintenance. A proven leader and collaborative team player as a Scrum Master in agile environments. Currently expanding expertise into game development through personal projects and specialized training.",
    tr: "Backend, Frontend ve Etkileşimli Sesli Yanıt (IVR) sistemlerinde 5+ yıllık deneyime sahip deneyimli bir Yazılım Geliştirici. Yazılım geliştirme yaşam döngüsünün tüm aşamalarında, mimari tasarımdan kodlamaya, hata ayıklamadan test ve bakıma kadar mükemmeliyet sergiler. Scrum Master olarak çevik ortamlarda liderlik ve ekip çalışmasına dayalı işbirliği sağlama konusunda yetkindir. Şu anda kişisel projeler ve özel eğitimler yoluyla oyun geliştirme alanında uzmanlık kazanmaktadır.",
  };

  const skills = [
    { label: language === "en" ? "Backend Development":"Backend Geliştirici", level: 85 },
    { label: language === "en" ? "Frontend Development":"Frontend Geliştirici", level: 85 },
    { label: language === "en" ? "IVR Systems":"IVR Sistemleri", level: 80 },
    { label: language === "en" ? "Game Development":"Oyun Geliştirici", level: 70 },
  ];

  const stats = [
    { label: language === "en" ? "Years of Experience" : "Deneyim Yılı", value: 5 },
    { label: language === "en" ? "Completed Projects" : "Tamamlanan Proje", value: 50 },
    { label: language === "en" ? "Skills Mastered" : "Uzmanlık Alanı", value: 10 },
  ];

  return (
    <section
      id="about"
      className={`about ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <h2>{translations[language].about}</h2>
      <p>{aboutMeText[language]}</p>

      <div className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3>
              <Counter endValue={stat.value} duration={2000} />
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <span>{skill.label}</span>
            <div className="bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
