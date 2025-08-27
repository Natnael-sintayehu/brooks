import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Listings from "./pages/Listings.jsx";
import PropertyDetail from "./pages/PropertyDetail.jsx";
import PostProperty from "./pages/PostProperty.jsx";
import Liked from "./pages/liked.jsx";
import "./App.css"; // 👈 add global layout styles here
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/post" element={<PostProperty />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
