import React from "react";
<<<<<<< HEAD
function LandingPage() {
  return <h1>Landing</h1>;
}
=======
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

>>>>>>> 9bcded640ebc581469f754c7c8155e08b013f287
export default LandingPage;
