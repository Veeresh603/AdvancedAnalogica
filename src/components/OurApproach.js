import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function OurApproach() {
  const data = useStaticQuery(graphql`
    query {
      consulting: file(relativePath: { eq: "macbook-pad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <div className="our_approach">
        <div className="image">
          <Image
          className="img"
            style={{
              borderRadius: "5px",
              objectFit: "contain",
              height: "500px",
            }}
            fluid={data.consulting.childImageSharp.fluid}
          />
        </div>
        <div className="text">
          <h2 className="borderLeftRight">our approach</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id
            odio. Amet morbi amet velit ut. Sit in cras porta velit integer
            maecenas.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default OurApproach

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top:100px;
 
  .our_approach{
      display:grid;
      grid-template-columns:repeat(11, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 0px;
       @media(max-width:479px){
        grid-template-rows: 1fr 1fr;

       }
        
  @media (max-width:767px){
    grid-template-rows: 1fr 1fr;

    }
  }
  .image{
    grid-area: 1/2/2/6;
    @media(max-width:479px){
        grid-area: 1/2/2/11;

       }
  }
  .text{
      grid-area: 1/7/2/11;
      display:flex;
    flex-flow: column wrap;
    @media(max-width:479px){
        grid-area: 2/2/3/11;

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
  p{
      font-family: var(--family);
      color:#111111;
      font-weight:400;
  }
  .img{
    @media(max-width:479px){
         height:400px !important;

       }
  }
`
