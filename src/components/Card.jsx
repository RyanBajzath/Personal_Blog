import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <CardContainer>
      <CardTopContainer>
        <p>Hello</p>
      </CardTopContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  height: 300px;
  width: 200px;
  border: black solid 3px;
  border-radius: 16px;
  bottom: 0;

  background: #f5f5f5;
  &:hover {
    transform: scale(1.1); /* Adjust the scale factor as needed for more zoom */

    z-index: 100;
  }

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 193px;
    width: 128px;
  }
`;

const CardTopContainer = styled.div`
  height: 120px;
  width: 168px;
  background: black;
  border-radius: 16px;
  margin-top: 16px;
  & p {
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    height: 77px;
    width: 108px;
  }
`;
export default Card;
