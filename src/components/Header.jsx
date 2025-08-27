import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../LanguageContext.jsx";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">🏡 RealEstate</div>
      </Link>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link to="/liked">{lang === "en" ? "Liked" : "የተወደዱ"}</Link>
        <Link to="/post">{lang === "en" ? "Post Property" : "ንብረት ይሽጡ"}</Link>
        <button onClick={toggleLang} className="lang-btn">
          {lang === "en" ? "EN" : "አማ"}
        </button>
      </nav>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </header>
  );
}
