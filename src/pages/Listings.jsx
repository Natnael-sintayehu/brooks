import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import properties from "../data/properties";
import {
  FaMapMarkerAlt,
  FaBed,
  FaToilet,
  FaHome,
  FaPhoneAlt,
  FaWarehouse,
  FaImage,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { useLang } from "../LanguageContext";
import "./Listings.css";

export default function Listings() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const typeFilter = params.get("type");

  const { t } = useLang();

  const [filters, setFilters] = useState({
    price: "",
    squarekm: "",
    bedrooms: "",
  });

  const [photoIndex, setPhotoIndex] = useState({});
  const sliderRefs = useRef({});
  const [liked, setLiked] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("likedProperties") || "[]");
    setLiked(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("likedProperties", JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  // Filtering
  const filtered = properties.filter((p) => {
    if (typeFilter && p.type !== typeFilter) return false;

    if (typeFilter === "housesell" || typeFilter === "land") {
      if (filters.squarekm) {
        if (filters.squarekm === "150" && p.squarekm !== 150) return false;
        if (filters.squarekm === "250" && p.squarekm !== 250) return false;
        if (filters.squarekm === "500" && p.squarekm !== 500) return false;
        if (filters.squarekm === "500+" && p.squarekm < 500) return false;
      }
      if (filters.price) {
        const priceNum = parseInt(p.price.replace(/[^0-9]/g, ""), 10);
        if (
          filters.price === "1-3" &&
          (priceNum < 1000000 || priceNum > 3000000)
        )
          return false;
        if (
          filters.price === "3-5" &&
          (priceNum < 3000000 || priceNum > 5000000)
        )
          return false;
        if (filters.price === "5+" && priceNum < 5000000) return false;
      }
    }

    if (typeFilter === "houserent") {
      if (filters.price) {
        const priceNum = parseInt(p.price.replace(/[^0-9]/g, ""), 10);
        if (
          filters.price === "1000-3000" &&
          (priceNum < 1000 || priceNum > 3000)
        )
          return false;
        if (
          filters.price === "3000-7000" &&
          (priceNum < 3000 || priceNum > 7000)
        )
          return false;
        if (filters.price === "700+" && priceNum < 700) return false;
      }
      if (filters.bedrooms) {
        const bedNum = Number(p.bedrooms);
        if (filters.bedrooms === "1" && bedNum !== 1) return false;
        if (filters.bedrooms === "2" && bedNum !== 2) return false;
        if (filters.bedrooms === "2+" && bedNum <= 2) return false;
      }
    }

    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const heading = typeFilter
    ? t(`listings.${typeFilter}`) + " - " + t("listings.available")
    : t("listings.available");

  const prevPhoto = (id, length) => {
    setPhotoIndex((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : length - 1,
    }));
  };

  const nextPhoto = (id, length) => {
    setPhotoIndex((prev) => ({
      ...prev,
      [id]: prev[id] < length - 1 ? prev[id] + 1 : 0,
    }));
  };

  const handleTouchStart = (e, id) => {
    sliderRefs.current[id].startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e, id, length) => {
    if (!sliderRefs.current[id]) return;
    const diff = e.touches[0].clientX - sliderRefs.current[id].startX;
    if (diff > 50) prevPhoto(id, length);
    if (diff < -50) nextPhoto(id, length);
    sliderRefs.current[id].startX = e.touches[0].clientX;
  };

  return (
    <div className="listings">
      <h2>{heading}</h2>

      {/* Filters */}
      {(typeFilter === "housesell" || typeFilter === "land") && (
        <div className="filter-bar">
          <div className="filter-group">
            <label>{t("listings.filters.squarekm")}</label>
            <select
              name="squarekm"
              value={filters.squarekm}
              onChange={handleFilterChange}
            >
              <option value="">{t("listings.filters.all")}</option>
              <option value="150">150</option>
              <option value="250">250</option>
              <option value="500">500</option>
              <option value="500+">500+</option>
            </select>
          </div>
          <div className="filter-group">
            <label>{t("listings.filters.price")}</label>
            <select
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
            >
              <option value="">{t("listings.filters.all")}</option>
              <option value="1-3">1M - 3M</option>
              <option value="3-5">3M - 5M</option>
              <option value="5+">5M+</option>
            </select>
          </div>
        </div>
      )}

      {typeFilter === "houserent" && (
        <div className="filter-bar">
          <div className="filter-group">
            <label>{t("listings.filters.price")}</label>
            <select
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
            >
              <option value="">{t("listings.filters.all")}</option>
              <option value="1000-3000">1000 - 3000</option>
              <option value="3000-7000">3000 - 7000</option>
              <option value="700+">700+</option>
            </select>
          </div>
          <div className="filter-group">
            <label>{t("listings.filters.bedrooms")}</label>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleFilterChange}
            >
              <option value="">{t("listings.filters.all")}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2+">2+</option>
            </select>
          </div>
        </div>
      )}

      {/* Pagination Top */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft /> {t("listings.prev")}
          </button>
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num + 1)}
              className={currentPage === num + 1 ? "active" : ""}
            >
              {num + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {t("listings.next")} <FaChevronRight />
          </button>
        </div>
      )}

      {/* Property Grid */}
      <div className="property-grid">
        {currentItems.map((p) => {
          const photos = p.photos || [];
          const currentIndex = photoIndex[p.id] || 0;
          sliderRefs.current[p.id] = sliderRefs.current[p.id] || {};
          const isLiked = liked.includes(p.id);

          return (
            <div key={p.id} className="property-card">
              {photos.length > 0 ? (
                <div
                  className="slider-container"
                  onTouchStart={(e) => handleTouchStart(e, p.id)}
                  onTouchMove={(e) => handleTouchMove(e, p.id, photos.length)}
                >
                  <div
                    className="slider-inner"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                      width: `${photos.length * 100}%`,
                    }}
                  >
                    {photos.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt={p.address}
                        className="property-img"
                      />
                    ))}
                  </div>

                  {photos.length > 1 && (
                    <>
                      <button
                        className="prev-btn"
                        onClick={() => prevPhoto(p.id, photos.length)}
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        className="next-btn"
                        onClick={() => nextPhoto(p.id, photos.length)}
                      >
                        <FaChevronRight />
                      </button>
                      <div className="photo-indicator">
                        {currentIndex + 1}/{photos.length}
                      </div>
                    </>
                  )}

                  <button
                    className={`like-btn floating ${isLiked ? "liked" : ""}`}
                    onClick={() => toggleLike(p.id)}
                  >
                    {isLiked ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>
              ) : (
                <div className="no-photo">
                  <FaImage size={60} />
                  <p>{t("listings.noImage")}</p>
                  <button
                    className={`like-btn floating ${isLiked ? "liked" : ""}`}
                    onClick={() => toggleLike(p.id)}
                  >
                    {isLiked ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>
              )}

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
          );
        })}
      </div>

      {/* Pagination Bottom */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft /> {t("listings.prev")}
          </button>
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num + 1)}
              className={currentPage === num + 1 ? "active" : ""}
            >
              {num + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {t("listings.next")} <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
