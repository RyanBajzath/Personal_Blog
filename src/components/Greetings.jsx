import React from "react";
import { FaRegSun,FaMoon } from "react-icons/fa";


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

return(<h3>{greeting}{timeOfDay=="day"? <FaRegSun/>:<FaMoon/>}</h3> )
   
    
  
};
export default Greetings;