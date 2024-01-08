import React, {useEffect, useLayoutEffect, useState} from "react";
import { RyanData } from "../data/RyanData";
import UseReducerCounter from "../components/UseReducerCounter";



function AboutPage() {
  // useEffect(()=>{
  //   fetch(`..\data\data.txt`)

  //   .then(rawData=>{console.log(rawData)})

  //   },[])


  const keyPassion = Object.keys(RyanData);

  return (
    <>
      <div>
        <UseReducerCounter/>
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
