import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import { CardThemeProvider } from "./components/CardThemeContext";

function App() {
  return (
    <>
    <CardThemeProvider>
      <NavBar />
      <PageContent>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="about" element={<AboutPage />} />
          <Route exact path="contact" element={<ContactPage />} />
        </Routes>
      </PageContent>
      </CardThemeProvider>
    </>
  );
}

const PageContent = styled.div``;

export default App;
