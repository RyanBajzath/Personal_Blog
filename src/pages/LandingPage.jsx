import React from "react";
import Blog from "../components/Blogs";
import Greetings from "../components/Greetings"

//Importing styling and Icons
import styled from "styled-components";


function LandingPage() {
  return (
    <>
      <PageDiv>
        <StyledGreetingDiv>
        <StyledHeader>Welcome to my Blog </StyledHeader>
        <Greetings/>
        </StyledGreetingDiv>

        <Blog />
      </PageDiv>
    </>
  );
}

const StyledHeader = styled.h1`
  text-align: center;
`;

const PageDiv = styled.div`
`

const StyledGreetingDiv = styled.div`
  display:flex;

  justify-content:center;
`

export default LandingPage;
