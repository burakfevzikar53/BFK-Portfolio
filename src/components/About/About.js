import React, { useState, useEffect } from "react";
import "./About.css";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "react-intersection-observer";
import Reveal from "../Reveal/Reveal";

const Counter = ({ endValue, duration, start }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startValue = 0;
    const increment = Math.max(1, Math.ceil(endValue / (duration / 50)));

    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        clearInterval(interval);
        setValue(endValue);
      } else {
        setValue(startValue);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [endValue, duration, start]);

  return <span>{value}+</span>;
};

const About = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const aboutMeText = {
    en: "Software Developer with 6+ years of experience across Backend, Frontend and Conversational AI (chatbot, voicebot, IVR) systems. Currently focused on AI engineering: integrating large language models, building agentic AI workflows with tool use and MCP, and shipping intelligent products end-to-end. A proven leader and collaborative team player as a Scrum Master in agile environments, with a growing passion for game development.",
    tr: "Backend, Frontend ve Konuşma Tabanlı AI (chatbot, voicebot, IVR) sistemlerinde 6+ yıllık deneyime sahip Yazılım Geliştirici. Şu anda odak noktası yapay zeka mühendisliği: büyük dil modellerini entegre etmek, araç kullanımı ve MCP ile agentic AI iş akışları kurmak ve akıllı ürünleri uçtan uca hayata geçirmek. Scrum Master olarak çevik ortamlarda liderlik ve ekip çalışması konusunda yetkin; oyun geliştirmeye de tutkuyla ilgileniyor.",
  };

  const skills = [
    { label: language === "en" ? "AI & LLM Engineering" : "AI & LLM Mühendisliği", level: 85 },
    { label: language === "en" ? "Agentic AI" : "Agentic AI", level: 80 },
    { label: language === "en" ? "Backend Development" : "Backend Geliştirme", level: 85 },
    { label: language === "en" ? "Frontend Development" : "Frontend Geliştirme", level: 85 },
    { label: language === "en" ? "Conversational AI / IVR" : "Konuşma Tabanlı AI / IVR", level: 90 },
    { label: language === "en" ? "Game Development" : "Oyun Geliştirme", level: 70 },
  ];

  const stats = [
    { label: language === "en" ? "Years of Experience" : "Deneyim Yılı", value: 6 },
    { label: language === "en" ? "Completed Projects" : "Tamamlanan Proje", value: 50 },
    { label: language === "en" ? "AI Products Shipped" : "Yayınlanan AI Ürünü", value: 3 },
    { label: language === "en" ? "Skills Mastered" : "Uzmanlık Alanı", value: 10 },
  ];

  return (
    <section
      id="about"
      className={`about ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <Reveal>
        <h2 className="section-title">{translations[language].about}</h2>
        <p className="about-text">{aboutMeText[language]}</p>
      </Reveal>

      <div className="stats" ref={statsRef}>
        {stats.map((stat, index) => (
          <Reveal key={index} delay={index * 120} direction="scale">
            <div className="stat-item glass">
              <h3>
                <Counter endValue={stat.value} duration={1500} start={statsInView} />
              </h3>
              <p>{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="skills glass" ref={skillsRef}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-bar-head">
              <span>{skill.label}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="bar">
              <div
                className="progress"
                style={{
                  width: skillsInView ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 120}ms`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
