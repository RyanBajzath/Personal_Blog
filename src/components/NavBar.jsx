<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <NavBarDiv>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/contact">contact</NavLink>
=======
//Importing React logic
import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//import js logic
import whatDayisit_DOMEvent from "./whatDayisIt_DOMEvent"

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
            src="https://media.discordapp.net/attachments/1148393855918559246/1153539656869232721/image.png?width=550&height=550"
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
>>>>>>> 9bcded640ebc581469f754c7c8155e08b013f287
    </NavBarDiv>
  );
}

<<<<<<< HEAD
const NavBarDiv = styled.div`
  /* height: 10vh; */
  background: #ffffe0;
  display: flex;
  justify-content: center;
  gap: 10vw;
  outline: #4e534e47 solid 1px;
`;
=======
//Styling for NavBar here used custom syling, styles will be scoped to the component.
const NavBarDiv = styled.div`
  display: flex;
  height: 10vh;
  /* font-size: 25px; */
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

`;

>>>>>>> 9bcded640ebc581469f754c7c8155e08b013f287
export default NavBar;
