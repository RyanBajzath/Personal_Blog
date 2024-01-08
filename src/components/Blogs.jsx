//Importing React and States
import React from "react";
import styled from "styled-components";
import Blog from "./Blog";

// using an API to create blog posts to emulate getting data from the back end.
function Blogs() {
  return (
    <BlogsContainer>
      <Blog />
    </BlogsContainer>
  );
}

const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Blogs;
