import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import RyanLogo from "./Ryan.svg"; // Adjust the path accordingly
import { MdPerson } from "react-icons/md";
import { IoFolderSharp } from "react-icons/io5";

function NavBar() {
  return (
    <>
      <StyledNavContainer>
        <StyledLeftIcons>
          <StyledNavLink to="/" activeClassName="active">
            <StyledLogo src={RyanLogo} alt="Ryan's Logo" />
          </StyledNavLink>
        </StyledLeftIcons>
        <StyledRightIcon>
          <StyledNavLink to="/about">
            <StyledMdPerson />
          </StyledNavLink>
          <StyledNavLink to="/contact">
            <StyledIoFolderSharp />
          </StyledNavLink>
        </StyledRightIcon>
      </StyledNavContainer>
    </>
  );
}

const StyledNavContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: grey;
  }
`;

const StyledLeftIcons = styled.div`
  @media (max-width: 768px) {
    display: flex; /* Add this line */
    flex-direction: row;
    justify-content: center;
    margin: auto;
  }
`;

const StyledRightIcon = styled.div`
  @media (max-width: 768px) {
    display: flex; /* Add this line */
    flex-direction: row;
    justify-content: center;
    margin: auto;
  }
`;

const StyledLogo = styled.img`
  height: 70px;
  width: 208px;
  &.active {
    filter: grayscale(100%);
  }
`;

const StyledMdPerson = styled(MdPerson)`
  width: 82px;
  height: 70px;

  margin: auto;
`;

const StyledIoFolderSharp = styled(IoFolderSharp)`
  width: 82px;
  height: 70px;
  margin: auto;
`;

export default NavBar;
