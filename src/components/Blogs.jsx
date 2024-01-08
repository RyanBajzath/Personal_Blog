//Importing React and States
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Video from "./Video";

// using an API to create blog posts to emulate getting data from the back end.
function Blog() {
  const [blog, setBlog] = useState("");

  //This hook will activate on mount only to prevent a loop, it fetches the data then stores it as a state.
  useEffect(() => {
    fetch("https://baconipsum.com/api/?callback=?")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[1]);
        setBlog(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <p>
        <b>Blog,</b>
        <i>noun.</i>a regularly updated website or web page, typically one run
        by an individual or small group, that is written in an informal or
        conversational style.
      </p>
      <StyledBlogContainer>
        <SyledBlog>
          <h1>First blog, got a job</h1>
          <StyledP>
            I have experimented with different careers, schools, side projects
            and relaized, I wanted a craft that combines my artistic and logical
            passions. My coding journey started in 2016 with little python
            projects. I found the idea of creating something and someone else
            being able to interact with it facinating. The means of distribution
            is also relativly easier, a website rather then creating something
            physical. I eventually completed a full stack developer course and I
            will be working as a front end developper for the 1st time next
            Monday the 25 of September. I am nervous but also happy to try, if I
            keep trying and learning then there is growth which is it's own
            reward.
          </StyledP>

        </SyledBlog>
      </StyledBlogContainer>
      <StyledBlogContainer>
        <SyledBlog>
          <h1>Second Blog</h1>
          <StyledP>
           I shall continue to learn and apply what I learned to this blog. I can proceed to make a video so I am doing both, applying what I learned and also teaching it.Please enjoy the video below where I try to teach the concent of JavaScript.
          </StyledP>
          <Video />
        </SyledBlog>
      </StyledBlogContainer>

    </>
  );
}

const StyledBlogContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 20px;
`;

const SyledBlog = styled.div`
  /* Remove display: flex; from here */

  /* Other styles remain the same */

  border: 5px solid black; /* Apply border to the container */
  width: 80vw;
  padding: 10px;
  display:flex;
  flex-direction:column;

  align-items:center;

`;

const StyledP = styled.p``;
export default Blog;
