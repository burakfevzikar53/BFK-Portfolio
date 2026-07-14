import React, { useState } from "react";
import "./Projects.css";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../Reveal/Reveal";
import { FaGithub, FaChartLine, FaGamepad } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { MdRecordVoiceOver } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { GiCardAceSpades } from "react-icons/gi";

const projects = [
  {
    name: { en: "Enterprise AI Chatbot", tr: "Kurumsal AI Chatbot" },
    icon: <BsChatDots />,
    gradient: "linear-gradient(135deg, #6d7cff, #a855f7)",
    status: "enterprise",
    ai: true,
    description: {
      en: "End-to-end setup of an LLM-powered customer service chatbot serving millions of interactions: intent & dialog design, backend orchestration and web chat UI.",
      tr: "Milyonlarca etkileşime hizmet veren, LLM destekli müşteri hizmetleri chatbot'unun uçtan uca kurulumu: intent & diyalog tasarımı, backend orkestrasyonu ve web chat arayüzü.",
    },
    highlights: [
      { en: "NLU intent & dialog flow design from scratch", tr: "Sıfırdan NLU intent & diyalog akışı tasarımı" },
      { en: "LLM integration for generative answers", tr: "Üretken yanıtlar için LLM entegrasyonu" },
      { en: "CRM & backend service integrations", tr: "CRM ve backend servis entegrasyonları" },
      { en: "Seamless live-agent handover", tr: "Canlı temsilciye kesintisiz devir" },
    ],
    technologies: ["LLM", "NLU", "Java / Spring Boot", "React", "Redis"],
  },
  {
    name: { en: "Voicebot & IVR Rebuild", tr: "Voicebot & IVR Yeniden Yazımı" },
    icon: <MdRecordVoiceOver />,
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    status: "enterprise",
    ai: true,
    description: {
      en: "Rebuilt a legacy IVR from the ground up as a modern AI voicebot platform: call-flow redesign, speech integration and 24/7 resilient architecture.",
      tr: "Eski (legacy) IVR sisteminin modern bir AI voicebot platformu olarak sıfırdan yeniden yazımı: çağrı akışı tasarımı, konuşma entegrasyonu ve 7/24 dayanıklı mimari.",
    },
    highlights: [
      { en: "Legacy call flows redesigned from scratch", tr: "Legacy çağrı akışlarının sıfırdan tasarımı" },
      { en: "STT / TTS & NLU pipeline integration", tr: "STT / TTS ve NLU hattı entegrasyonu" },
      { en: "Higher self-service & call deflection rates", tr: "Daha yüksek self-servis ve çağrı yönlendirme oranı" },
      { en: "Zero-downtime migration of live traffic", tr: "Canlı trafiğin kesintisiz taşınması" },
    ],
    technologies: ["IVR", "STT / TTS", "NLU", "Java", "Telephony"],
  },
  {
    name: { en: "Card Game (Mobile)", tr: "Kart Oyunu (Mobil)" },
    icon: <GiCardAceSpades />,
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    status: "review",
    description: {
      en: "A polished cross-platform card game built with React Native — custom game engine, fluid card animations and a full store release pipeline for iOS & Android.",
      tr: "React Native ile geliştirilen, özenle işlenmiş çapraz platform kart oyunu — özel oyun motoru, akıcı kart animasyonları ve iOS & Android için eksiksiz mağaza yayın süreci.",
    },
    highlights: [
      { en: "Custom card animations & game logic engine", tr: "Özel kart animasyonları ve oyun mantığı motoru" },
      { en: "Single codebase for iOS & Android", tr: "iOS & Android için tek kod tabanı" },
      { en: "Currently in App Store & Google Play review", tr: "Şu anda App Store & Google Play onay sürecinde" },
    ],
    technologies: ["React Native", "TypeScript", "iOS", "Android"],
  },
  {
    name: { en: "Conversation Monitoring Suite", tr: "Konuşma İzleme Platformu" },
    icon: <FaChartLine />,
    gradient: "linear-gradient(135deg, #22d3ee, #6d7cff)",
    status: "enterprise",
    description: {
      en: "Real-time monitoring and analytics for chatbot & voicebot traffic: live dashboards, alerting, conversation quality metrics and funnel analysis.",
      tr: "Chatbot ve voicebot trafiği için gerçek zamanlı izleme ve analitik: canlı dashboard'lar, alarm mekanizmaları, konuşma kalitesi metrikleri ve dönüşüm (funnel) analizi.",
    },
    highlights: [
      { en: "Live dashboards for conversation health", tr: "Konuşma sağlığı için canlı dashboard'lar" },
      { en: "Anomaly detection & proactive alerting", tr: "Anomali tespiti ve proaktif alarmlar" },
      { en: "Funnel & containment-rate analytics", tr: "Funnel ve çözüm oranı analitiği" },
      { en: "Faster incident detection & resolution", tr: "Daha hızlı hata tespiti ve çözümü" },
    ],
    technologies: ["Grafana", "Kibana / ELK", "Prometheus", "Node.js"],
  },
  {
    name: { en: "React → Next.js Migration", tr: "React → Next.js Dönüşümü" },
    icon: <SiNextdotjs />,
    gradient: "linear-gradient(135deg, #334155, #0f172a)",
    status: "enterprise",
    description: {
      en: "Incremental migration of a large production React (CRA) codebase to Next.js: SSR, route-based code splitting and a major Core Web Vitals boost.",
      tr: "Büyük bir production React (CRA) kod tabanının Next.js'e aşamalı dönüşümü: SSR, route bazlı code splitting ve Core Web Vitals'ta ciddi iyileşme.",
    },
    highlights: [
      { en: "SSR & ISR architecture design", tr: "SSR & ISR mimari tasarımı" },
      { en: "Incremental, zero-downtime migration strategy", tr: "Aşamalı, kesintisiz geçiş stratejisi" },
      { en: "Significant Lighthouse / Core Web Vitals gains", tr: "Lighthouse / Core Web Vitals'ta belirgin kazanım" },
      { en: "Improved SEO visibility & load times", tr: "SEO görünürlüğü ve yükleme sürelerinde iyileşme" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "SSR / ISR"],
  },
  {
    name: { en: "AI Quiz Game", tr: "AI Bilgi Yarışması" },
    icon: <FaGamepad />,
    gradient: "linear-gradient(135deg, #10b981, #22d3ee)",
    status: "opensource",
    ai: true,
    github: "https://github.com/burakfevzikar53/trivia-game",
    description: {
      en: "AI-based mobile quiz game with LLM-generated questions and adaptive difficulty — React Native frontend backed by a Spring Boot API.",
      tr: "LLM tarafından üretilen sorular ve uyarlanabilir zorluk seviyesine sahip AI tabanlı mobil bilgi yarışması — Spring Boot API destekli React Native uygulaması.",
    },
    highlights: [
      { en: "LLM-generated question pipeline", tr: "LLM ile soru üretim hattı" },
      { en: "Adaptive difficulty & scoring system", tr: "Uyarlanabilir zorluk ve puanlama sistemi" },
      { en: "Multi-category game modes", tr: "Çok kategorili oyun modları" },
    ],
    technologies: ["React Native", "Spring Boot", "LLM API"],
  },
];

const statusLabels = {
  enterprise: { en: "Enterprise", tr: "Kurumsal" },
  review: { en: "In Store Review", tr: "Mağaza Onayında" },
  opensource: { en: "Open Source", tr: "Açık Kaynak" },
  live: { en: "Live", tr: "Yayında" },
};

const Projects = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section id="projects" className={`projects ${theme}`}>
      <Reveal>
        <h2 className="section-title">
          {language === "en" ? "My Projects" : "Projelerim"}
        </h2>
        <p className="section-subtitle">
          {language === "en"
            ? "Enterprise AI platforms, large-scale migrations and mobile games — flip the cards for the full story."
            : "Kurumsal AI platformları, büyük ölçekli dönüşümler ve mobil oyunlar — tüm detaylar için kartları çevirin."}
        </p>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={index} delay={(index % 3) * 120}>
          <div
            className={`project-card ${theme} ${
              flipped[index] ? "flipped" : ""
            }`}
          >
            <div className="card-front">
              {project.ai && <span className="ai-badge">✦ AI</span>}
              <div
                className="project-cover"
                style={{ background: project.gradient }}
              >
                <span className={`status-badge status-${project.status}`}>
                  {project.status === "review" && <span className="status-pulse" />}
                  {statusLabels[project.status][language]}
                </span>
                <span className="project-cover-icon">{project.icon}</span>
              </div>
              <h3>{project.name[language]}</h3>
              <p>{project.description[language]}</p>
              <div className="front-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-button"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                <button
                  className="details-button"
                  onClick={() => handleFlip(index)}
                >
                  {language === "en" ? "View Details" : "Detayları Gör"}
                </button>
              </div>
            </div>
            <div className="card-back">
              <h3>{project.name[language]}</h3>
              <ul className="highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h[language]}</li>
                ))}
              </ul>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="back-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-button"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                <button
                  className="go-back-button"
                  onClick={() => handleFlip(index)}
                >
                  {language === "en" ? "Go Back" : "Geri Dön"}
                </button>
              </div>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
