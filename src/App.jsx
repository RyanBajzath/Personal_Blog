import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
// import Video from "./components/Video";
import ClassComponentBox from "./components/ClassComponentCounter";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userName, setUserName] = useState(`guest, Please eneter your name!`);

  const updateUserName = (newUserName) => {
    setUserName(newUserName);
  };
  return (
    <UserContext.Provider value={{ userName, updateUserName }}>
      {children}
    </UserContext.Provider>
  );
}

function App() {
  return (
    <>
      <UserProvider>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="about" element={<AboutPage />} />
          <Route exact path="contact" element={<ContactPage />} />
        </Routes>
        <ClassComponentBox />
      </UserProvider>
    </>
  );
}

export default App;
