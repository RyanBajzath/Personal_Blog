import React from "react";
<<<<<<< HEAD
function LandingPage() {
  return <h1>Landing</h1>;
}
=======
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

>>>>>>> 9bcded640ebc581469f754c7c8155e08b013f287
export default LandingPage;
