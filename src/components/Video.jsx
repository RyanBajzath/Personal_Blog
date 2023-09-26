import React from "react";
import ReactPlayer from 'react-player/youtube'

const Video =()=>{
    return(
        <>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=V6EgkbWBeB0"
        playing={false}
        volume={.6}
        controls={true}
        width='50%'



        />


        </>
    )
}
export default Video;