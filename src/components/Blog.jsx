//Importing React and States
import React from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";

// using an API to create blog posts to emulate getting data from the back end.
function Blog() {
  return (
    <BlogContainer>
      <LeftArrowContainer>
        <FaArrowLeft />
      </LeftArrowContainer>
      <BlogMain>
        <BlogTop></BlogTop>
        <Bottom></Bottom>
      </BlogMain>
      <RightArrowContainer>
        <FaArrowRightLong />
      </RightArrowContainer>
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LeftArrowContainer = styled.div``;
const RightArrowContainer = styled.div``;

const BlogMain = styled.div`
  border-radius: 16px;
  height: 456px;
  width: 386px;
  /* border: black 3px solid; */
  @media (max-width: 768px) {
    height: 389px;
    width: 329px;
  }
`;

const BlogTop = styled.div`
  border-radius: 16px;
  height: 50%;
  border: black 3px solid;
`;

const Bottom = styled.div`
  border-radius: 16px;

  height: 50%;
  border: black 3px solid;
`;
export default Blog;
