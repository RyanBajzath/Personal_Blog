import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import ClassComponentBox from "./components/ClassComponentCounter";
import Greetings from "./components/Greetings";


function App() {
  return (
    <>
      <NavBar />
      <Greetings/>
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
