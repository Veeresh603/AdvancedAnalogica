import React from 'react'
import styled from "styled-components"
import videos from "../../images/video(4).mp4"


function banner() {
    return (
        <Wrapper>
            <div className="section">
             
            <video className="bg__header"  preload='auto' loop autoPlay muted>
 <source src={videos} type="video/mp4" />
 Your browser does not support HTML5 video.
</video>
            </div>
        </Wrapper>
    )
}

export default banner

const Wrapper = styled.div`
    display: block;
    width:100%;
    height:90vh;
    @media (max-width: 479px){
          
        height: 80vh;
    }

    .section{
        position:relative;
        width:100%;
        height:90vh;
        @media (max-width: 479px){
          
          height: 80vh;
      }
       
    }
  
    .bg__header{
       
        width:100%;
        height:100%;
        object-fit:cover;
    }
`