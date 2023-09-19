import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ClassComponentBox from "./components/ClassComponentBox";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <ClassComponentBox />
    </>
  );
}

export default App;
