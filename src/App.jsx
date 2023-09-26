import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
// import Video from "./components/Video";
import ClassComponentBox from "./components/ClassComponentCounter";



function App() {
  return (
    <>
      <NavBar />
{/* <Video/> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="about" element={<AboutPage />} />
        <Route exact path="contact" element={<ContactPage />} />
      </Routes>
      <ClassComponentBox />
    </>
  );
}

export default App;
