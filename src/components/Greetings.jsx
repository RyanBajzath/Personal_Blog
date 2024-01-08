import React, { useContext, useState } from "react";
import { FaRegSun,FaMoon } from "react-icons/fa";
import styled from "styled-components";
import { UserContext } from "../App";





function Greetings(){
    // Greet the user based on the time of day and perhaps the day of the week.


    const user = useContext(UserContext)
    const userName = user.userName;
    const updateUserName = user.updateUserName
    const [customName, setCustomName] = useState(""); // State for the custom name input
    console.log(`this is the text holder ${customName}`)

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
        greeting = `Good day, ${userName} `
    } else{
        greeting = `Good night, ${userName} `
    }
const handleUserName = (event)=>{
    setCustomName(event.target.value)

}
    const changeUserName=(e)=>{

        updateUserName(customName)
        setCustomName("")
        console.log(`this is the userName holder ${userName}`)



    }

return(<StyledGreeting>
    <h3>{greeting}</h3>
    <h3>{timeOfDay=="day"? <FaRegSun/>:<FaMoon/>}
    </h3>
    <input type="text" onChange={handleUserName} value={customName}/>
    <button onClick={changeUserName}> changeUserName</button>
    </StyledGreeting>)



};

const StyledGreeting = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
`

export default Greetings;