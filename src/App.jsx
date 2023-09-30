import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
// import Video from "./components/Video";
import ClassComponentBox from "./components/ClassComponentCounter";

export const UserContext = createContext(null)




function App() {
  return (
    <>
<UserContext.Provider value={{user:"username"}}>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="about" element={<AboutPage />} />
        <Route exact path="contact" element={<ContactPage />} />
      </Routes>
      <ClassComponentBox />
      </UserContext.Provider>

    </>
  );
}

export default App;
