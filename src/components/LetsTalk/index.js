import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

function index() {
  return (
    <Wrapper>
      <div className="section">
        <div className="text">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
        <div className="button">
            <Link className="link" to="">Let's Talk</Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default index

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  justify-content:center;

  .section{
      width:80%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: center;
      align-self: center;
  }
  h4{
      color: #000000;
      font-weight: 500;
      font-size: 22px;
  }
  .link{
        background-color: var(--primaryColor);
        text-decoration: none;
        color: #fff;
        padding:10px;
        cursor: pointer;

  }
  .link:hover{
       background-color: #fff;
       border: 1px solid var(--primaryColor);
       color: var(--primaryColor);
       transition: 1s ease-in-out;

  }
`
