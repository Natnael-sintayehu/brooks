import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaTiktok, FaTelegram } from "react-icons/fa";
import { useLang } from "../LanguageContext";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useLang();

  const phone1 = "+251 900 000 000";
  const phone2 = "+251 911 111 111";
  const tiktokUrl = "https://www.tiktok.com/@youraccount";
  const telegramUrl = "https://t.me/youraccount";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contacts">
          <FaPhoneAlt className="icon" /> {phone1} |{" "}
          <FaPhoneAlt className="icon" /> {phone2}
        </div>

        <div className="footer-social">
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
            <FaTiktok className="icon" />
          </a>
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
            <FaTelegram className="icon" />
          </a>
        </div>

        <button className="btn-about" onClick={() => navigate("/about")}>
          {t("footer.aboutBtn")}
        </button>
      </div>
    </footer>
  );
}
