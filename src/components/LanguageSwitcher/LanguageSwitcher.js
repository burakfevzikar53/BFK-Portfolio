import React from "react";
import "./LanguageSwitcher.css";
import { useLanguage } from "../../context/LanguageContext";
import enFlag from "../../images/en.png";
import trFlag from "../../images/tr.png";
const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button onClick={toggleLanguage}>
        <img
          src={language === "en" ? trFlag : enFlag}
          alt={language === "en" ? "Türkçe" : "English"}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
