import React, { useState } from "react";
import "./Projects.css";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import github1 from "../../images/ecom.png";
import github2 from "../../images/pass.png";
import github3 from "../../images/poster.png";
import github4 from "../../images/q7.png";
import github5 from "../../images/trivia.jpg";
import github6 from "../../images/cars.png";
import github7 from "../../images/weat.png";
import github8 from "../../images/load.png";
import github9 from "../../images/step.jpg";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf"; // PDF kütüphanesi
const projects = [
  {
    name: { en: "E-commerce App", tr: "E-ticaret Uygulaması" },
    description: {
      en: "An online shopping platform with product listing, cart, and payment features.",
      tr: "Ürün listeleme, sepet ve ödeme özelliklerine sahip bir çevrimiçi alışveriş platformu.",
    },
    image: github1,
    github: "https://github.com/burakfevzikar53/E-commerce-app",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: { en: "Password Manager", tr: "Şifre Yöneticisi" },
    description: {
      en: "A secure application to manage and store your passwords safely.",
      tr: "Şifrelerinizi güvenle yönetmek ve saklamak için güvenli bir uygulama.",
    },
    image: github2,
    github: "https://github.com/burakfevzikar53/Password-Generator-in-React",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: { en: "Poster Generator", tr: "Poster Oluşturucu" },
    description: {
      en: "An app to design custom posters and graphics with ease.",
      tr: "Kolayca özel posterler ve grafikler tasarlamak için bir uygulama.",
    },
    image: github3,
    github: "https://github.com/burakfevzikar53/Movie-Poster",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: { en: "Step Counter", tr: "Adım Sayar" },
    description: {
      en: "A fitness app that tracks your daily steps and calorie consumption.",
      tr: "Günlük adımlarınızı ve kalori tüketiminizi izleyen bir fitness uygulaması.",
    },
    image: github9,
    github: "https://github.com/burakfevzikar53/ReactNavite-StepCounter",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: { en: "Trivia Game", tr: "Bilgi Yarışması Oyunu" },
    description: {
      en: "A quiz app with multiple categories and scoring system.",
      tr: "Birden fazla kategoriye sahip ve puanlama sistemi olan bir bilgi yarışması uygulaması.",
    },
    image: github5,
    github: "https://github.com/burakfevzikar53/trivia-game",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: { en: "User Profile App", tr: "Kullanıcı Profili Uygulaması" },
    description: {
      en: "Application that creates users' business cards.",
      tr: "Kullanıcıların kartvizitini oluşturan uygulama.",
    },
    image: github4,
    github: "https://github.com/burakfevzikar53/User-Profile-Design-in-React",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: { en: "Expanding Card", tr: "Genişleyen Kart" },
    description: {
      en: "An app that compresses your images and makes them look nice.",
      tr: "Görsellerinizi sıkıştırıp güzel gözükmesini sağlayan bir uygulama",
    },
    image: github6,
    github: "https://github.com/burakfevzikar53/Expanding-Card-in-React",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: { en: "Weather App", tr: "Hava Durumu Uygulaması" },
    description: {
      en: "A weather forecast app fetching real-time data from APIs.",
      tr: "API'lerden gerçek zamanlı veri çeken bir hava durumu tahmin uygulaması.",
    },
    image: github7,
    github: "https://github.com/burakfevzikar53/Weather-App",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: { en: "Blurry Loading", tr: "Bulanık Yükleme" },
    description: {
      en: "As your page loads, it becomes clearer in direct proportion to the image behind it.",
      tr: "Sayfanız yüklenirken arkasında resimle doğru orantılı şekilde netleşir.",
    },
    image: github8,
    github: "https://github.com/burakfevzikar53/Blurry-Loading-in-React",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const downloadPDF = (project) => {
    const doc = new jsPDF();
    doc.text(`Project Name: ${project.name[language]}`, 10, 10);
    doc.text(`Description: ${project.description[language]}`, 10, 20);
    doc.save(`${project.name[language]}.pdf`);
  };

  return (
    <section id="projects" className={`projects ${theme}`}>
      <h2 className="project-title">
        {language === "en" ? "My Projects" : "Projelerim"}
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${theme} ${
              flipped[index] ? "flipped" : ""
            }`}
          >
            <div className="card-front">
              <img src={project.image} alt={project.name[language]} />
              <h3>{project.name[language]}</h3>
              <p>{project.description[language]}</p>
              <div className="front-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                >
                  GitHub
                </a>
                <button
                  className="details-button"
                  onClick={() => handleFlip(index)}
                >
                  {language === "en" ? "View Details" : "Detayları Gör"}
                </button>
              </div>
            </div>
            <div className="card-back">
              <h3>
                {language === "en" ? "Project Details" : "Proje Detayları"}
              </h3>
              <QRCodeCanvas value={project.github} size={100} />
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="back-buttons">
                <button
                  className="pdf-button"
                  onClick={() => downloadPDF(project)}
                >
                  {language === "en" ? "Download PDF" : "PDF İndir"}
                </button>
                <button
                  className="go-back-button"
                  onClick={() => handleFlip(index)}
                >
                  {language === "en" ? "Go Back" : "Geri Dön"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;