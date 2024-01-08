import React from "react";
import ReactPlayer from 'react-player/youtube'
import styled from "styled-components";

const Video =()=>{
    return(
        <>
        <StyledReactPlayer
        url="https://www.youtube.com/watch?v=V6EgkbWBeB0"
        playing={false}
        volume={.6}
        controls={true}
        light={true}



        />


        </>
    )
}
const StyledReactPlayer = styled(ReactPlayer)`
max-width:50%;
/* width:50px; */

`
export default Video;