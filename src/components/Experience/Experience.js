import React from "react";
import "./Experience.css";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "react-intersection-observer";
import Reveal from "../Reveal/Reveal";
import vfImage from "../../images/vf.jpeg";
import triviaImage from "../../images/trivia.jpeg";
import kocImage from "../../images/koc.jpeg";

const ExperienceItem = ({ date, title, role, description, image, position }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`timeline-item ${inView ? "visible" : ""} ${
        position === "left" ? "left" : "right"
      }`}
    >
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <img src={image} alt={title} className="timeline-image" />
        <h3>{title}</h3>
        <h4>{role}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const experienceData = [
    {
      date: language === "en" ? "Oct 2019 – Present" : "Ekim 2019 – Günümüz",
      title: "Vodafone",
      role: language === "en" ? "Software Developer / Scrum Master" : "Yazılım Geliştirici / Scrum Master",
      description: language === "en"
        ? "Responsible for FE and BE development and continuous improvement of the LLM-powered Vodafone Chatbot & Voicebot, integrating generative AI into customer-facing conversational experiences."
        : "LLM destekli Vodafone Chatbot & Voicebot'un ön uç ve arka uç geliştirme ve sürekli iyileştirilmesinden sorumlu; üretken yapay zekayı müşteriye dönük konuşma deneyimlerine entegre ediyor.",
      image: vfImage,
    },
    {
      date: language === "en" ? "Sept 2024 – Present" : "Eylül 2024 – Günümüz",
      title: "Quiz Game",
      role: language === "en" ? "Game Developer / Founder" : "Oyun Geliştirici / Kurucu",
      description: language === "en"
        ? "Created an AI-based mobile quiz game using React Native and Spring Boot, with LLM-generated questions and adaptive difficulty."
        : "React Native ve Spring Boot kullanarak, LLM tarafından üretilen sorular ve uyarlanabilir zorluk seviyesine sahip AI tabanlı bir mobil quiz oyunu geliştirdi.",
      image: triviaImage,
    },
    {
      date: language === "en" ? "June 2018 – Aug 2018" : "Haziran 2018 – Ağustos 2018",
      title: "Koç Sistem",
      role: language === "en" ? "Software Developer Intern" : "Yazılım Geliştirici Stajyeri",
      description: language === "en"
        ? "Designed an internal automation website's frontend using Javascript, Bootstrap, CSS, and HTML."
        : "Javascript, Bootstrap, CSS ve HTML kullanarak bir iç otomasyon web sitesinin ön yüzünü tasarladı.",
      image: kocImage,
    },
  ];

  return (
    <section id="experience" className={`experience ${theme}`}>
      <Reveal>
        <h2 className="section-title">
          {language === "en" ? "Experience" : "Deneyimler"}
        </h2>
        <p className="section-subtitle">
          {language === "en"
            ? "A journey from enterprise conversational AI to founding my own AI-powered products."
            : "Kurumsal konuşma tabanlı yapay zekadan kendi AI destekli ürünlerimi kurmaya uzanan bir yolculuk."}
        </p>
      </Reveal>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            date={item.date}
            title={item.title}
            role={item.role}
            description={item.description}
            image={item.image}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
