import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header
      className="d-flex justify-content-between align-items-center bg-white p-3 shadow-sm"
      role="banner"
    >
      {/* Logo + App title */}
      <div className="d-flex align-items-center gap-2">
        <img
          src={logo}
          alt="Timeline App logo"
          width="40"
          height="40"
          role="img"
        />
        <h1 className="text-primary h4 mb-0">Timeline App</h1>
      </div>

      {/* Toggle switch with accessible label */}
      <div>
        <input
          type="checkbox"
          id="themeSwitch"
          className="d-none"
          checked={darkMode}
          onChange={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        />
        <label
          htmlFor="themeSwitch"
          className="theme-toggle"
          role="switch"
          aria-checked={darkMode}
        >
          <span className="visually-hidden">
            {darkMode ? "Dark mode enabled" : "Light mode enabled"}
          </span>
        </label>
      </div>
    </header>
  );
}




