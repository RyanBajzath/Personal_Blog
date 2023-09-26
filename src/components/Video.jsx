import React from "react";
import ReactPlayer from "react-player";

const Video =()=>{
    return(
        <ReactPlayer
        url="https://www.youtube.com/watch?v=V6EgkbWBeB0"
        playing={false}
        volume={.6}

        />
    )
}
export default Video;