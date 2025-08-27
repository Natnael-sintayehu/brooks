import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaTree, FaBuilding } from "react-icons/fa";
import { useLang } from "../LanguageContext.jsx";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>{t("home.title")}</h1>
          <p>{t("home.subtitle")}</p>
        </div>

        <div className="cards-row">
          {["housesell", "houserent", "land", "others"].map((type) => {
            const info = t(`home.${type}`);
            const icon =
              type === "land" ? (
                <FaTree size={40} color="#fff" />
              ) : type === "others" ? (
                <FaBuilding size={40} color="#fff" />
              ) : (
                <FaHome size={40} color="#fff" />
              );
            return (
              <div
                key={type}
                className="card"
                onClick={() => navigate(`/listings?type=${type}`)}
              >
                <div className="icon-wrapper">{icon}</div>
                <h3>{info.title}</h3>
                <p>{info.desc}</p>
                <button className="btn-card">{info.btn}</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
