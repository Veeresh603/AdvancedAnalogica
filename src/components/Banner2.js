import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
function Banner2(props) {
  return (
    <Wrapper style={!props.style ? null : props.style}>
      <div className="parent">
        <div className="background">
          <Image style={{maxWidth: "100% !important", height:"600px", opacity:"0.5"}}fluid={props.img} />
        </div>
        <div className="title">
          <h1>{props.title}</h1>
          <p>
       {props.desc}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Banner2

const Wrapper = styled.div`
  width: 100%;
  .parent {
    /* position: relative; */
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 0px;
    height:600px;
  }
  .title {
    grid-area: 1/2/2/7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index:1;
    color:#fff;
    @media (max-width:991px){
      grid-area: 1/2/2/7;

  }
  @media (max-width:767px){
      grid-area: 1/2/2/9;

  }
  @media (max-width:479px){
      grid-area: 1/2/2/11;

  }
  }
 
  .background {
    position: absolute;
    background-color: #111111;
    width:100%;
    height:600px;
    /* opacity: 0.8; */
  }
`
