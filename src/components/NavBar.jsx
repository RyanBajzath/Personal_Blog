//Importing React logic
import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//Importing styling and Icons
import styled from "styled-components";

//This will be the main Navigation bar with the routes made in App.jsx. It will go into App to be present in each page.
function NavBar() {
  return (
    <NavBarDiv>
      <LogoDiv>
        {" "}
        <StledNavLink
          style={({ isActive }) => {
            return isActive ? { opacity: "0.8" } : { opacity: "1" };
          }}
          to="/"
        >
          <StyledImg
            src="src\assets\logo.png"
            alt="Logo for Ryan's blog website"
          />
        </StledNavLink>
      </LogoDiv>
      <RightLinksDiv>
        <StledNavLink
          style={({ isActive }) => {
            return isActive ? { color: "Gray" } : { color: "black" };
          }}
          to="/about"
        >
          about
        </StledNavLink>
        <StledNavLink
          to="/contact"
          style={({ isActive }) => {
            return isActive ? { color: "Gray" } : { color: "black" };
          }}
        >
          contact
        </StledNavLink>
      </RightLinksDiv>
    </NavBarDiv>
  );
}

//Styling for NavBar here used custom syling, styles will be scoped to the component.
const NavBarDiv = styled.div`
  display: flex;
  height: 10vh;
  font-size: 25px;
  justify-content: space-between; /* Place RightLinksDiv on the right */
  align-items: center; /* Vertically center content */
  padding: 0 20px; /* Add padding for spacing */
  margin-top: 20px;
`;

const LogoDiv = styled.div`
  display: flex;
`;

const RightLinksDiv = styled.div`
  display: flex;
  gap: 20px; /* Add spacing between links */
`;

const StledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: black; /* Set the color for unvisited links */
  text-decoration: none; /* Remove the underline */
  &:visited {
    color: black; /* Set the color for visited links & is a pseudoclass */
  }
`;

const StyledImg = styled.img`
  max-height: 100%; /* Adjust as needed */
`;

export default NavBar;
