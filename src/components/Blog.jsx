//Importing React and States
import React, { useState, useContext,useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import blogsData from "./blogs.json";
import CardThemeContext from "./CardThemeContext";
// using an API to create blog posts to emulate getting data from the back end.

function Blog() {

  const {activeCard } = useContext(CardThemeContext);
console.log(activeCard)

  const [blogs, setBlogs] = useState(blogsData[activeCard]);
  const [blogindex, setBlogIndex] = useState(0);

  useEffect(()=>{
    setBlogs(blogsData[activeCard]);
    setBlogIndex(0);

  },[activeCard])




  function handleRightButtonClick() {
    setBlogIndex((prevState) => (prevState + 1) % blogs.length);
  }
  function handleLeftButtonClick() {
    setBlogIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  }

  return (
    <BlogContainer>
      <LeftArrowContainer onClick={handleLeftButtonClick}>
        <FaArrowLeft />
      </LeftArrowContainer>
      <BlogMain>
        <BlogTop>
          <StyledImg src={blogs[blogindex].src} />
        </BlogTop>
        <Bottom>
          <h1>{blogs[blogindex].title}</h1>
          <p>{blogs[blogindex].bio}</p>
        </Bottom>
      </BlogMain>
      <RightArrowContainer onClick={handleRightButtonClick}>
        <FaArrowRightLong />
      </RightArrowContainer>
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LeftArrowContainer = styled.button`
all: unset;
`;
const RightArrowContainer = styled.button`
all: unset`;

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 95%;
`;

const Bottom = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap:10px;
  padding:15px;
  align-items: center;
  height: 50%;
  border: black 3px solid;
`;
export default Blog;
