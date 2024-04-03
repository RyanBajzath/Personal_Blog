import React from "react";
import styled from "styled-components";
import Card from "./Card";
import react, {useState,useContext} from "react";
import CardThemeContext from "./CardThemeContext";





function Cards() {

const{activeCard, setActiveCard} = useContext(CardThemeContext);


return (
  <CardsContainer>
    <CardRotated onClick={()=>{setActiveCard("hobbies")}} name="hobbies" value="hobbies"    style={{ transform: activeCard === "hobbies" ? "scale(1.1)" : "" }}>

      <Card name="hobbies"  />
    </CardRotated>
    <div onClick={()=>{setActiveCard("work")}} style={{ transform: activeCard === "work" ? "scale(1.1)" : "" }}>
    <Card name="work" />
    </div>
    <CardRotated  onClick={()=>{setActiveCard("projects")}} style={{ transform: activeCard === "projects" ? "scale(1.1)" : "" }}>
      <Card name="projects" />
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
