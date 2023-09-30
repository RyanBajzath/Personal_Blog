import React, { useContext } from "react";
import { FaRegSun,FaMoon } from "react-icons/fa";
import styled from "styled-components";
import { UserContext } from "../App";





function Greetings(){
    // Greet the user based on the time of day and perhaps the day of the week.


    const user = useContext(UserContext)
    console.log(user.user)
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
        greeting = `Good day,${user.user} `
    } else{
        greeting = `Good night, ${user.user} `
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