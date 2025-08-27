import React, { useState } from "react";
import "./PostProperty.css";
import { useLang } from "../LanguageContext";

export default function PostProperty() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    type: "",
    price: "",
    address: "",
    squarekm: "",
    bedrooms: "",
    toilet: "",
    mini_house: "No",
    sellerPhone: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const selected = Array.from(files).slice(0, 3); // limit to 3 photos
      setFormData((prev) => ({ ...prev, [name]: selected }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Property:", formData);
    alert(t("postProperty.success"));
  };

  return (
    <div className="post-property">
      <h2>{t("postProperty.title")}</h2>
      <form onSubmit={handleSubmit} className="property-form">
        {/* Property Type */}
        <div className="form-group">
          <label>{t("postProperty.type")}</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">{t("postProperty.selectType")}</option>
            <option value="housesell">{t("postProperty.housesell")}</option>
            <option value="houserent">{t("postProperty.houserent")}</option>
            <option value="land">{t("postProperty.land")}</option>
            <option value="other">{t("postProperty.other")}</option>
          </select>
        </div>

        {/* Price */}
        <div className="form-group">
          <label>{t("postProperty.price")}</label>
          <input
            type="text"
            name="price"
            placeholder={t("postProperty.pricePlaceholder")}
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label>{t("postProperty.address")}</label>
          <input
            type="text"
            name="address"
            placeholder={t("postProperty.addressPlaceholder")}
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Square Meters */}
        <div className="form-group">
          <label>{t("postProperty.squarekm")}</label>
          <input
            type="number"
            name="squarekm"
            placeholder={t("postProperty.squarekmPlaceholder")}
            value={formData.squarekm}
            onChange={handleChange}
          />
        </div>

        {/* Bedrooms */}
        <div className="form-group">
          <label>{t("postProperty.bedrooms")}</label>
          <input
            type="number"
            name="bedrooms"
            placeholder={t("postProperty.bedroomsPlaceholder")}
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </div>

        {/* Toilets */}
        <div className="form-group">
          <label>{t("postProperty.toilet")}</label>
          <input
            type="number"
            name="toilet"
            placeholder={t("postProperty.toiletPlaceholder")}
            value={formData.toilet}
            onChange={handleChange}
          />
        </div>

        {/* Mini House */}
        <div className="form-group">
          <label>{t("postProperty.miniHouse")}</label>
          <select
            name="mini_house"
            value={formData.mini_house}
            onChange={handleChange}
          >
            <option value="No">{t("postProperty.no")}</option>
            <option value="Yes">{t("postProperty.yes")}</option>
          </select>
        </div>

        {/* Seller Phone */}
        <div className="form-group">
          <label>{t("postProperty.sellerPhone")}</label>
          <input
            type="tel"
            name="sellerPhone"
            placeholder={t("postProperty.phonePlaceholder")}
            value={formData.sellerPhone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Photos */}
        <div className="form-group">
          <label>{t("postProperty.photos")}</label>
          <input
            type="file"
            name="photos"
            multiple
            accept="image/*"
            onChange={handleChange}
          />
          {formData.photos.length > 0 && (
            <div className="photo-preview">
              {formData.photos.map((file, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(file)}
                  alt={`preview-${idx}`}
                  className="preview-img"
                />
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          {t("postProperty.submit")}
        </button>
      </form>
    </div>
  );
}
