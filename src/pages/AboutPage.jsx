import React from "react";
<<<<<<< HEAD
function AboutPage() {
  return <h1>AboutPage</h1>;
=======
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
>>>>>>> 9bcded640ebc581469f754c7c8155e08b013f287
}
export default AboutPage;
