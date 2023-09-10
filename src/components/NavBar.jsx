import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <NavBarDiv>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </NavBarDiv>
  );
}

const NavBarDiv = styled.div`
  /* height: 10vh; */
  background: #ffffe0;
  display: flex;
  justify-content: center;
  gap: 10vw;
  outline: #4e534e47 solid 1px;
`;
export default NavBar;
