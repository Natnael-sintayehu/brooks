import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaTree, FaBuilding } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Find Your Dream Property</h1>
          <p>Buy, Rent, or Post with Confidence</p>
        </div>

        <div className="cards-row">
          {/* House Sell */}
          <div
            className="card"
            onClick={() => navigate("/listings?type=housesell")}
          >
            <div className="icon-wrapper">
              <FaHome size={40} color="#fff" />
            </div>
            <h3>House Sell</h3>
            <p>Discover beautiful houses for sale.</p>
            <button className="btn-card">Explore</button>
          </div>

          {/* House Rent */}
          <div
            className="card"
            onClick={() => navigate("/listings?type=houserent")}
          >
            <div className="icon-wrapper">
              <FaHome size={40} color="#fff" />
            </div>
            <h3>House Rent</h3>
            <p>Find your next rental home.</p>
            <button className="btn-card">Explore</button>
          </div>

          {/* Land */}
          <div className="card" onClick={() => navigate("/listings?type=land")}>
            <div className="icon-wrapper">
              <FaTree size={40} color="#fff" />
            </div>
            <h3>Land</h3>
            <p>Find bare plots ready for your project.</p>
            <button className="btn-card">Explore</button>
          </div>

          {/* Others */}
          <div
            className="card"
            onClick={() => navigate("/listings?type=other")}
          >
            <div className="icon-wrapper">
              <FaBuilding size={40} color="#fff" />
            </div>
            <h3>Others</h3>
            <p>Shops, offices, and commercial spaces.</p>
            <button className="btn-card">Explore</button>
          </div>
        </div>
      </section>
    </div>
  );
}
