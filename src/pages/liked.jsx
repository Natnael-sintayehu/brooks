import React, { useState, useEffect } from "react";
import properties from "../data/properties";
import {
  FaMapMarkerAlt,
  FaBed,
  FaToilet,
  FaHome,
  FaPhoneAlt,
  FaWarehouse,
  FaImage,
  FaHeart,
} from "react-icons/fa";
import "./Listings.css";
import { useLang } from "../LanguageContext";

export default function Liked() {
  const [liked, setLiked] = useState([]);
  const { t } = useLang();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("likedProperties") || "[]");
    setLiked(saved);
  }, []);

  const toggleLike = (id) => {
    const updated = liked.includes(id)
      ? liked.filter((lid) => lid !== id)
      : [...liked, id];

    setLiked(updated);
    localStorage.setItem("likedProperties", JSON.stringify(updated));
  };

  const likedProperties = properties.filter((p) => liked.includes(p.id));

  if (likedProperties.length === 0)
    return <h2 style={{ textAlign: "center" }}>{t("liked.empty")}</h2>;

  return (
    <div className="listings">
      <h2>{t("liked.title")}</h2>
      <div className="property-grid">
        {likedProperties.map((p) => (
          <div key={p.id} className="property-card">
            {p.photos && p.photos.length > 0 ? (
              <img src={p.photos[0]} alt={p.address} className="property-img" />
            ) : (
              <div className="no-photo">
                <FaImage size={60} />
                <p>{t("listings.noImage")}</p>
              </div>
            )}

            {/* Like/Unlike Button */}
            <button
              className={`like-btn floating ${
                liked.includes(p.id) ? "liked" : ""
              }`}
              onClick={() => toggleLike(p.id)}
            >
              <FaHeart />
            </button>

            <div className="property-info">
              <h3 className="price">{p.price}</h3>
              <p className="address">
                <FaMapMarkerAlt className="icon" /> {p.address}
              </p>
              <ul className="details">
                {p.squarekm > 0 && (
                  <li>
                    <FaWarehouse className="icon" /> {p.squarekm}{" "}
                    {t("listings.unit.m2")}
                  </li>
                )}
                {p.bedrooms > 0 && (
                  <li>
                    <FaBed className="icon" /> {p.bedrooms}{" "}
                    {t("listings.unit.beds")}
                  </li>
                )}
                {p.toilet > 0 && (
                  <li>
                    <FaToilet className="icon" /> {p.toilet}{" "}
                    {t("listings.unit.toilets")}
                  </li>
                )}
                {p.mini_house > 0 && (
                  <li>
                    <FaHome className="icon" /> {p.mini_house}{" "}
                    {t("listings.unit.miniHouse")}
                  </li>
                )}
              </ul>
              <p className="phone">
                <FaPhoneAlt className="icon" /> {p.sellerPhone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
