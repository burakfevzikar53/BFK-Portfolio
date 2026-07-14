import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

import "./styles/global.css";

function App() {
  return (
    <div>
      {/* Sabit aurora arka plan */}
      <div className="bg-fx" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <ThemeSwitcher />
      <LanguageSwitcher />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
