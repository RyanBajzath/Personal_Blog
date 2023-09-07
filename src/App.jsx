import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./assets/components/components/LandingPage";
import AboutPage from "./assets/components/components/AboutPage";
import ContactPage from "./assets/components/components/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
