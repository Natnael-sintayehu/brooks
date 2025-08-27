import React from "react";
import { FaPhoneAlt, FaEnvelope, FaTiktok, FaTelegram } from "react-icons/fa";
import { useLang } from "../LanguageContext";
import "./About.css";

export default function About() {
  const { t } = useLang();

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>{t("about.title")}</h1>
        <p>{t("about.subtitle")}</p>
      </section>

      {/* Company Description */}
      <section className="about-section">
        <h2>{t("about.company.title")}</h2>
        <p>{t("about.company.desc")}</p>
      </section>

      {/* Contact Info */}
      <section className="about-section contact-info">
        <h2>{t("about.contact.title")}</h2>
        <p>
          <FaPhoneAlt className="icon" /> +251 900 000 000
        </p>
        <p>
          <FaPhoneAlt className="icon" /> +251 911 111 111
        </p>
        <p>
          <FaEnvelope className="icon" /> info@broker.com
        </p>
      </section>

      {/* Social Links */}
      <section className="about-section social-links">
        <h2>{t("about.social.title")}</h2>
        <p>
          <FaTiktok className="icon" />{" "}
          <a
            href="https://www.tiktok.com/@youraccount"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </p>
        <p>
          <FaTelegram className="icon" />{" "}
          <a
            href="https://t.me/youraccount"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </p>
      </section>
    </div>
  );
}
