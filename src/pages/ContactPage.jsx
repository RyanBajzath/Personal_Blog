// My goal here is to have a form to send With a email that will act like an ID and a comment
//I will set my states what will hold the data
// Then I will make the JSX
// Then I will make the logic for the submit
import React, { useState, useEffect, useContext} from "react";
import { UserContext } from "../App";

function ContactPage() {
  const user = useContext(UserContext)
  const userName = user.userName;
  console.log(userName)

  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

let handleSubmit=(e)=>{

// validateEmail(email)
e.preventDefault()
const subject = 'Regarding Your Website, BlogwithRyan.com';

const mailtoUrl = `mailto:ryan.bajzath@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Comment: ${comment}, From: ${name}`)}`;
window.location.href = mailtoUrl;

setName("")
setComment("")
}





  return <form onSubmit={handleSubmit}>
    <label>Enter Your name:
    <input type="text" name="name" value={userName} onChange={(e)=>setName(e.target.value)}/>
    </label>
    <label>Enter Your comment
      <input type="textbox" name="comment" value={comment} onChange={e=>setComment(e.target.value)}/>
     </label>
    <button type="submit">Send</button>
  </form>
}
export default ContactPage;
