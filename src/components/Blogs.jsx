//Importing React and States
import React from "react";
import { useEffect, useState} from "react";


// using an API to create blog posts to emulate getting data from the back end.
function Blog(){
    const[blog, setBlog] = useState("")

    //This hook will activate on mount only to prevent a loop, it fetches the data then stores it as a state.
    useEffect(() => {
        fetch( 'https://baconipsum.com/api/?callback=?')
          .then((res) => res.json())
          .then((data) => {
           console.log(data)
           setBlog(data)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
   return (<>
   <h1>blog</h1>
   <h2>{blog}</h2>
   </>
   )
}
export default Blog;