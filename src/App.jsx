import React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ClassComponentBox from "./components/ClassComponentBox";
import NavBar from "./components/NavBar";
=======
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import ClassComponentBox from "./components/ClassComponentCounter";
>>>>>>> 9bcded640ebc581469f754c7c8155e08b013f287

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
