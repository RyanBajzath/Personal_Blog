//Importing React and States
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Blog from "./Blog";

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
