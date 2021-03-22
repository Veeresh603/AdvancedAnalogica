import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown";

function Overview(props) {
  const {overview} = props
  return (
    <Wrapper>
      <div className="section">
        <div className="title">
          <h2>overview</h2>
        </div>
        <div className="descrption">
      <ReactMarkdown>
        {overview}
      </ReactMarkdown>
        </div>
      </div>
    </Wrapper>
  )
}

export default Overview

const Wrapper = styled.div`
  /* margin-top: -90px; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* align-items: center; */
  flex-wrap: wrap;
  width: 100%;
  height: auto;

  .section {
    border: 1px solid groove;
    width: 90%;
    height: auto;
    padding:10px;
    @media (max-width:479px){
   width:100%;
 }

    h2 {
      color: var(--primaryColor);
      font-size:27px;
      font-weight:800;

    }
  }
`
