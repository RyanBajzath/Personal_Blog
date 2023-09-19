import React from "react";
import { RyanData } from "../data/RyanData";

function AboutPage() {
  const keyPassion = Object.keys(RyanData);

  return (
    <>
      <div>
        <h1>AboutPage</h1>
        <p>
          {keyPassion[0]}: {RyanData.name}
        </p>
        <p>
          {keyPassion[1]}: {RyanData.passion}
        </p>
      </div>
    </>
  );
}
export default AboutPage;
