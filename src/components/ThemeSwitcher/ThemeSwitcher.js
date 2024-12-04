import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
      <span className="theme-label">{theme === "dark" ? "⛅" : "🌙"}</span>
    </div>
  );
};

export default ThemeSwitcher;
