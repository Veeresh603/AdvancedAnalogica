import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

function Hero(props) {
  const {title} = props
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "robot.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
    return (
        <Wrapper>
        <div className="banner">
        
        <Img style={{width:"100%"}} fluid={data.file.childImageSharp.fluid} />

    </div> 
    <div className="banner_heading">
    <h1>{title}</h1>
        </div>
   </Wrapper>
    )
}

export default Hero
const Wrapper = styled.div`
   display: flex;
   box-sizing: border-box;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 500px;
   position: relative;

   background-color: rgb(16, 29, 51, 0.8);

   .banner{
       display:flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       width:100%;
       opacity: 0.7;
       height:500px;
       position: absolute;
       z-index: 1;
   }
   
  
   .banner_heading{
       background-color: transparent;
       width:84%;
       z-index:1;
    
       h1{
       color: white;
       z-index: 100;
       opacity: 1;
       font-size: 40px;
       font-weight: 900;
       width: 10px;
       background-color: var(--primaryColor);
       padding:0 10px;
   }
   }
   
`
const Img = styled(Image)`
     object-fit: cover;
     max-width:100% !important;
     max-height:500px !important;
     @media (max-width:479px){
 height:500px;
 }
`