import React from "react";
import Blog from "../components/Blogs";

//Importing styling and Icons
import styled from "styled-components";


function LandingPage() {
  return (<>
  <StyledHeader>Welcome to my Blog</StyledHeader>
  <Blog/>
  </>)
}

const StyledHeader = styled.h1`
text-align:center;
margin-top:10px;`

export default LandingPage;
