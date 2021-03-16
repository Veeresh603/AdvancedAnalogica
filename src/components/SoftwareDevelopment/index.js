import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

function SoftwareDevelopment() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <div className="section">
      
        <div className="right_section">
        <h2 className="borderLeftRight">software development</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas.
          </h4>
          <ul>
            <li>
              <h6>Artificial Intelligence</h6>
            </li>
            <li>
              <h6>Internet of things</h6>
            </li>{" "}
            <li>
              <h6>Cyber Security & services</h6>
            </li>
          </ul>
          <LinkTo to="#">Learn More</LinkTo>
        </div>
        <div className="left_section">
           
           <Image style={{borderRadius:"5px"}} fluid={data.file.childImageSharp.fluid} />
           
       </div>
      </div>
    </Wrapper>
  )
}

export default SoftwareDevelopment


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  /* padding-bottom: 50px; */
  @media (max-width: 767px){
    margin-top: 60px;

      height:auto;
    }
  .section {
    /* background-color: gray; */
    width: 80%;
    height: 400px;
    display: flex;
    @media (max-width:991px){
       width: 90%;
    }
    @media (max-width: 767px){
      flex-direction: column;
      height:auto;
      width:90%;
    }
  
  }
  .left_section {
    position: relative;
    display: flex;
    width: 50%;
    height: 400px;
    /* background-color: blue; */
    flex-shrink: inherit;
    @media (max-width: 767px){
      height:auto;
      width:90%;
      align-self: center;
      justify-content: center;
      order:1;
    }
  
  }
  .right_section {
    padding: 0 20px;
    display: flex;
    width: 50%;
    height: 400px;
    /* background-color: green; */
    flex-direction: column;
    @media (max-width: 767px){
      height:auto;
      width:80%;
      align-self: center;
      order: 2;
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
      @media (max-width:991px){
      font-size: 13px;
    }
    }

    ul,
    li {
      list-style: none;
      padding-left: 0px;
      margin-top: -16px;
    }
    h6 {
      font-family: var(--family);
      font-weight: 900 !important;
      color: #000000;
      font-size: 15px;
    }
    .classRoom_wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    p{
      color: gray;
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
  @media (max-width: 767px){
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
    margin-top: 5px;
  padding: 18px 24px;
  width:150px;
  background-color: #fff;
    border: 1px solid var(--primaryColor);
    color: var(--primaryColor);

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
      @media (max-width: 479px) {
  
    order: 5;
  }
`