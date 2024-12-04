import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher"; // LanguageSwitcher tekrar ekleniyor

import "./styles/global.css";

function App() {
  return (
    <div>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
