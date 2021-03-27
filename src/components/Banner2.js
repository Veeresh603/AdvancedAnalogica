import React from "react"
import styled from "styled-components"

function Banner2() {
  return (
    <Wrapper>
      <div className="parent">
        <div className="background"></div>
        <div className="title">
          <h1>What we do</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas. .
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
    position: relative;
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
    background-color: #c4c4c4;
    grid-area: 1/1/2/12;
  }
`
