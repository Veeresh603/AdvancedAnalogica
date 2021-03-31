import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll';
function AnchorTab(props) {
  return (
    <Wrapper>
      <div className="anchor_tab">
         <div className="anchor_tab_section">
             <div>
             <Link className="link" to="">{props.link1}</Link>
             </div>
             <div>
             <Link to="" className="link" >{props.link2}</Link>
             </div> <div>
             <Link to="" className="link" >{props.link3}</Link>
             </div>
          

         </div>
      </div>
    </Wrapper>
  )
}

export default AnchorTab

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top:-30px;
  z-index:1;
  padding-bottom: 150px;
  .anchor_tab {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 70px;
    grid-column-gap: 5px;
    grid-row-gap: 0px;
  }
  .anchor_tab_section{
      grid-area:1/7/2/12;
      background-color: var(--primaryColor);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      @media (max-width:991px){
      grid-area: 1/5/2/12;

  }
  @media (max-width:767px){
      grid-area: 1/2/2/12;

  }
  @media (max-width:479px){
    grid-area: 1/1/2/12;
  }
  }
  .link{
      font-size:20px;
      color:white;
      @media (max-width:767px){
        font-size:18px;

  }
  @media (max-width:767px){
        font-size:15px;

  }
  }
`