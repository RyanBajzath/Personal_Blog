// Importing React and States
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import blogsData from "./blogs.json";
import CardThemeContext from "./CardThemeContext";

function Blog() {
  const { activeCard } = useContext(CardThemeContext);

  const [blogs, setBlogs] = useState(blogsData[activeCard] || []);
  const [blogIndex, setBlogIndex] = useState(0);

  useEffect(() => {
    const next = blogsData[activeCard] || [];
    setBlogs(next);
    setBlogIndex(0);
  }, [activeCard]);

  const hasBlogs = blogs.length > 0;

  function handleRightButtonClick() {
    if (!hasBlogs) return;
    setBlogIndex((i) => (i + 1) % blogs.length);
  }

  function handleLeftButtonClick() {
    if (!hasBlogs) return;
    setBlogIndex((i) => (i - 1 + blogs.length) % blogs.length);
  }

  return (
    <BlogContainer>
      {hasBlogs && (
        <>
          <LeftArrow
            onClick={handleLeftButtonClick}
            aria-label="Previous post"
            title="Previous"
          >
            <FaArrowLeft size={20} />
          </LeftArrow>

          <RightArrow
            onClick={handleRightButtonClick}
            aria-label="Next post"
            title="Next"
          >
            <FaArrowRightLong size={20} />
          </RightArrow>
        </>
      )}

      <BlogMain role="region" aria-live="polite">
        {hasBlogs ? (
          <>
            <BlogTop>
              <StyledImg
                src={blogs[blogIndex].src}
                alt={blogs[blogIndex].title || "Blog image"}
              />
            </BlogTop>
            <Bottom>
              <h1>{blogs[blogIndex].title}</h1>
              <p>{blogs[blogIndex].bio}</p>
            </Bottom>
          </>
        ) : (
          <EmptyState>No posts available.</EmptyState>
        )}
      </BlogMain>
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* arrows position relative to this */
  width: fit-content; /* shrink-wrap around BlogMain */
`;

const ArrowButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  z-index: 2;
  touch-action: manipulation;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
  &:active {
    transform: translateY(-50%) scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 20px; /* larger tap target on mobile */
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: -40px;
`;
const RightArrow = styled(ArrowButton)`
  right: -40px;
`;

const BlogMain = styled.div`
  border-radius: 16px;
  height: 456px;
  width: 386px;
  @media (max-width: 768px) {
    height: 389px;
    width: 329px;
  }
`;

const BlogTop = styled.div`
  border-radius: 16px;
  height: 50%;
  border: #000 3px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f1f1;
`;

const StyledImg = styled.img`
  height: 95%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

const Bottom = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  align-items: center;
  height: 50%;
  border: #000 3px solid;
`;

const EmptyState = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  font-style: italic;
`;

export default Blog;
