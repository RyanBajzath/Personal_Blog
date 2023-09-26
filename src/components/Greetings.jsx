import React from "react";
import { FaRegSun,FaMoon } from "react-icons/fa";
import styled from "styled-components"


function Greetings(){
    // Greet the user based on the time of day and perhaps the day of the week.


    //Get the users time of day
    let hour = new Date().getHours()

    //check hour and perform conditional check
    let timeOfDay
    if(hour>=6&& hour<=17){
        timeOfDay = "day"
    } else{
        timeOfDay = "night"
    }
    let greeting
    if(hour>=6&& hour<=17){
        greeting = "Good day"
    } else{
        greeting = "Good night"
    }

return(<StyledGreeting><h3>{greeting}</h3><h3>{timeOfDay=="day"? <FaRegSun/>:<FaMoon/>}</h3></StyledGreeting>)



};

const StyledGreeting = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
`

export default Greetings;