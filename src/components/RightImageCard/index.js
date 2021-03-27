import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Link } from "gatsby"

function Card(props) {
  return (
    <Wrapper>
      <div className="section">
        <div className="left_section">
          <Image style={{ borderRadius: "5px" }} fluid={props.img} />
        </div>
        <div className="right_section">
          <h2 className="borderLeftRight">{props.title}</h2>
          <h4>{props.desc}</h4>
          <ul>
            {props.list.map(list => (
              <li>
                {list.title}
              </li>
            ))}
          </ul>
          <LinkTo to="#">Learn More</LinkTo>
        </div>
      </div>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  /* padding-bottom: 50px; */
  @media (max-width: 767px) {
    padding: 0px;
    height: auto;
    margin-top: -30px;
  }
  .section {
    /* background-color: gray; */
    width: 80%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    @media (max-width: 991px) {
      width: 90%;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      height: auto;
    }
  }
  .left_section {
    position: relative;
    display: flex;
    width: 50%;
    height: 400px;
    /* background-color: blue; */
    flex-shrink: inherit;
    @media (max-width: 767px) {
      width: 90%;
      height: 100px;
      justify-content: center;
      align-self: center;
    }
  }
  .right_section {
    padding: 0 20px;
    display: flex;
    width: 50%;
    height: 500px;
    /* background-color: green; */
    flex-direction: column;
    @media (max-width: 767px) {
      width: 80%;
      padding-top: 202px;
      height: auto;
      justify-content: center;
      align-self: center;
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
    > h4 {
      padding-bottom: 2px;
      font-weight: 400 !important;
      font-size: 20px;
      color: var(--black);
      @media (max-width: 991px) {
        font-size: 13px;
      }
    }

    ul,
    li {
      list-style: none;
      padding-left: 0px;
      margin-top: -16px;
      padding: 20px 0;
    }
    h6 {
      font-family: var(--family);
      font-weight: 900 !important;
      color: #000000;
      font-size: 15px;
    }
  }
`
const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* z-index: 1; */
  height: 490px; // or whatever
  @media (max-width: 767px) {
    width: 100%;
    height: 300px;
  }
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: contain !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; // needed for IE9+ polyfill
  }
`

const LinkTo = styled(Link)`
  margin-top: -30px;
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
  &:hover {
    color: var(--primaryColor);
    transform: translate3d(0px, -1px, 0px);

    background-color: var(--primaryColor);
    color: #fff;
    box-shadow: none;
  }
`
