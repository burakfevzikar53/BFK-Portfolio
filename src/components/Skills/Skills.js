import React from "react";
import "./Skills.css";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import Reveal from "../Reveal/Reveal";
import {
  FaBrain,
  FaRobot,
  FaServer,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

const tickerItems = [
  "Claude",
  "GPT-4",
  "LangChain",
  "MCP",
  "RAG",
  "AI Agents",
  "Prompt Engineering",
  "LLM",
  "Vector DB",
  "Fine-tuning",
  "Voicebot",
  "Chatbot",
  "Spring Boot",
  "React",
];

const Skills = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const categories = [
    {
      icon: <FaBrain />,
      featured: true,
      title: { en: "AI & LLM Engineering", tr: "Yapay Zeka & LLM Mühendisliği" },
      description: {
        en: "Building intelligent products powered by large language models.",
        tr: "Büyük dil modelleriyle güçlendirilmiş akıllı ürünler geliştirme.",
      },
      skills: [
        "LLM Integration (Claude, GPT)",
        "Prompt Engineering",
        "RAG",
        "Embeddings & Vector DBs",
        "Fine-tuning",
      ],
    },
    {
      icon: <FaRobot />,
      featured: true,
      title: { en: "Agentic AI", tr: "Agentic AI" },
      description: {
        en: "Designing autonomous agents that plan, use tools and collaborate.",
        tr: "Planlayan, araç kullanan ve iş birliği yapan otonom ajanlar tasarlama.",
      },
      skills: [
        "AI Agents",
        "MCP (Model Context Protocol)",
        "LangChain & LangGraph",
        "Tool Use / Function Calling",
        "Multi-Agent Orchestration",
        "Claude Code",
      ],
    },
    {
      icon: <BsChatDots />,
      featured: true,
      title: { en: "Conversational AI", tr: "Konuşma Tabanlı AI" },
      description: {
        en: "5+ years shipping enterprise chatbot, voicebot and IVR experiences.",
        tr: "5+ yıldır kurumsal chatbot, voicebot ve IVR deneyimleri geliştiriyor.",
      },
      skills: [
        "Chatbot & Voicebot",
        "IVR Systems",
        "NLU / Intent Design",
        "Dialog Management",
        "Speech-to-Text / TTS",
      ],
    },
    {
      icon: <FaServer />,
      title: { en: "Backend", tr: "Backend" },
      description: {
        en: "Robust and scalable services behind every product.",
        tr: "Her ürünün arkasında sağlam ve ölçeklenebilir servisler.",
      },
      skills: ["Java & Spring Boot", "Node.js", "REST APIs", "SQL / NoSQL", "Microservices"],
    },
    {
      icon: <FaLaptopCode />,
      title: { en: "Frontend", tr: "Frontend" },
      description: {
        en: "Fluid, accessible and modern user interfaces.",
        tr: "Akıcı, erişilebilir ve modern kullanıcı arayüzleri.",
      },
      skills: ["React", "React Native", "JavaScript / TypeScript", "HTML & CSS", "Responsive Design"],
    },
    {
      icon: <FaTools />,
      title: { en: "Tools & Methods", tr: "Araçlar & Yöntemler" },
      description: {
        en: "The craft and process that keep teams moving fast.",
        tr: "Ekipleri hızlı tutan süreçler ve araçlar.",
      },
      skills: ["Git & CI/CD", "Agile / Scrum", "Docker", "Unity", "Jira"],
    },
  ];

  return (
    <section id="skills" className={`skills-section ${theme}`}>
      <Reveal>
        <h2 className="section-title">
          {language === "en" ? "Skills" : "Yetenekler"}
        </h2>
        <p className="section-subtitle">
          {language === "en"
            ? "From production-grade conversational AI to autonomous agents — the technologies I build with."
            : "Üretim seviyesinde konuşma tabanlı yapay zekadan otonom ajanlara — birlikte üretim yaptığım teknolojiler."}
        </p>
      </Reveal>

      <div className="skills-ticker" aria-hidden="true">
        <div className="skills-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              {item} <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {categories.map((cat, index) => (
          <Reveal key={index} delay={(index % 3) * 120}>
            <div className={`skill-card glass ${cat.featured ? "featured" : ""}`}>
              {cat.featured && (
                <span className="featured-badge">
                  {language === "en" ? "AI Focus" : "AI Odaklı"}
                </span>
              )}
              <div className="skill-card-icon">{cat.icon}</div>
              <h3>{cat.title[language]}</h3>
              <p>{cat.description[language]}</p>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
