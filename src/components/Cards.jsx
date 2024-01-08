import React from "react";
import styled from "styled-components";
import Card from "./Card";

function Cards() {
  return (
    <CardsContainer>
      <CardRotated>
        <Card />
      </CardRotated>
      <Card />
      <CardRotated>
        <Card />
      </CardRotated>
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

const CardRotated = styled.div`
  align-items: flex-end;
  align-content: flex-end;
  margin: 20px -20px; /* Adjust the negative margin as needed for more overlap */
  &:first-child {
    transform: rotate(-15deg); /* Adjust the rotation angle as needed */
  }
  &:nth-child(3) {
    transform: rotate(15deg); /* Adjust the rotation angle as needed */
  }
`;

export default Cards;
