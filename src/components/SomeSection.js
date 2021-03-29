import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function SomeSection() {
  const data = useStaticQuery(graphql`
    query {
      consulting: file(relativePath: { eq: "purple-bg.jpg" }) {
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
      <div className="somesection">
        <div className="background"></div>
        <div className="text">
          <divv className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim
              in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit
              in cras porta velit integer maecenas.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </divv>
        </div>
        <div className="image">
          <Image
            className="img"
            style={{
              borderRadius: "5px",
              objectFit: "contain",
              height: "550px",
            }}
            fluid={data.consulting.childImageSharp.fluid}
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default SomeSection

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 150px;
  @media (max-width: 479px) {
    margin-top: 80px;

    

    }
  .somesection {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 1fr;
    @media (max-width: 479px) {
      grid-template-rows: 400px 250px;
      padding-bottom:100px;
    

    }
  }

  .text {
    grid-area: 1/3/2/5;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 479px) {
        grid-area: 2/2/3/11;
        
  
    }
  }
  .background {
    background-color: #c4c4c4;
    grid-area: 1/1/2/12;
    @media (max-width: 479px) {
       
        grid-area: 2/2/3/11;

    }
  }
  .para {
    width: 100%;
    display: flex;
    border: 2px solid white;
    padding: 10px;
    z-index:1;
  }
  .image {
    grid-area: 1/7/3/12;
    padding: 50px 0px;
    @media (max-width: 479px) {
        grid-area: 1/2/2/11;
        padding:0px;

    }
  }
  .img{
    @media(max-width:479px){
         height:400px !important;

       }
  }
`
