import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"


function TrainingOnEmergingTechnologyGrid(props) {
  
  return (
    <Wrapper>
      <div id={!props.id ? null : props.id} className="trainingOn_whatwedo">
        <div className="left_image">
          <Img
            style={{
              borderRadius: "5px",
              objectFit: "contain",
              height: "500px",
            }}
            fluid={props.img}
          />
        </div>
        <div className="right_text">
          <div>
            <h2 className="borderLeftRight">{props.title}</h2>
          </div>
          <div>
            {" "}
            <p>
         {props.desc}
            </p>
          </div>
          <div className="row_wrapper" style={{marginBottom: "20px"}}>
          
            <div className="classsrom">
            <h4>{!props.classroom ? null : props.classroom}</h4>
              <div className="list_classroom">
              {!props.list ? null : <ul>
              {props.list.map(l => (
                <li key={l.id}>{l.title}</li>
              ))}
            </ul> }
              </div>
            </div>
            <div className="corporate">
            <h4>{!props.corporate ? null : props.corporate}</h4>
              <div className="list_corporate">
              {!props.list ? null : <ul>
              {props.list.map(l => (
                <li key={l.id}>{l.title}</li>
              ))}
            </ul> }
              </div>
            </div>
          </div>

          <div>
            <Link className="link" to={props.link}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default TrainingOnEmergingTechnologyGrid

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  @media (max-width:479px){
       margin: 0px;
    }
  .trainingOn_whatwedo {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto !important;
    grid-gap: 0px;

    @media (max-width: 767px) {
      grid-template-rows: auto !important;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
  .left_image {
    grid-area: 1/2/2/6;
    @media (max-width: 767px) {
      grid-area: 1/2/2/11;
    }
  }
  .right_text {
    grid-area: 1/7/2/11;

    display: flex;
    flex-flow: column;
    /* justify-content: space-evenly; */
    @media (max-width: 767px) {
      grid-area: 2/2/2/11;
    }
  
  }
  h2 {
    width: 100%;

    font-family: var(--family);
    font-weight: 600;
    color: var(--primaryColor);

    font-size: 25px;
    @media (max-width: 479px) {
      font-size: 20px;
      height: auto;
    }
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .borderLeftRight::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .link {
    margin-top: 20px;
    padding: 18px 24px;
    color: var(--primaryColor);
    transform: translate3d(0px, -1px, 0px);
    background-color: #fff;
    border: 1px solid var(--primaryColor);
    width: 150px;

    border-radius: 6px;
    transition: transform 0.25s ease, box-shadow 0.25s ease,
      background-color 0.25s ease;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    text-decoration: none;
  }
  .link:hover {
    color: var(--primaryColor);
    transform: translate3d(0px, -1px, 0px);

    background-color: var(--primaryColor);
    color: #fff;
    box-shadow: none;
  }
  li,
  ul {
    padding-left: 0px;
    list-style: none;
    padding: 10px 0;
    font-size: 15px;
    font-weight: 600;
  }
  p {
    font-family: var(--family);
    color: #111111;
    font-weight: 400;
  }
  .row_wrapper{
    
      display: flex;
      flex-direction: row;

      @media(max-width:479px){
          flex-wrap: wrap;
      }

  }
  .classsrom{
      display: flex;
      flex-direction: column;

  }
  .corporate{
      display: flex;
      flex-direction: column;
      margin-left:45px;

      @media(max-width:479px){
        margin-left:0px;
      }

  }
  .list_classroom{
    margin-top:-26px;
  }
  .list_corporate{
    margin-top:-26px;
  }
  h4{
      font-weight: 600;
      color:#848484;
  }
`
