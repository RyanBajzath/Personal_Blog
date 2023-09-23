import React from "react";
import Blog from "../components/Blogs";

//Importing styling and Icons
import styled from "styled-components";

function LandingPage() {
  return (
    <>
      <PageDiv>
        <StyledHeader>Welcome to my Blog</StyledHeader>
        <Blog />
      </PageDiv>
    </>
  );
}

const StyledHeader = styled.h1`
  text-align: center;
`;

const PageDiv = styled.div``;

export default LandingPage;
