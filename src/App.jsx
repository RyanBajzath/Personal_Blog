import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import styled from "styled-components";

function App() {
  return (
    <>
      <NavBar />
      <PageContent>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="about" element={<AboutPage />} />
          <Route exact path="contact" element={<ContactPage />} />
        </Routes>
      </PageContent>
    </>
  );
}

const PageContent = styled.div``;

export default App;
