import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Details = () => {
  const data = useStaticQuery(graphql`
    query {
     imageOne: file(relativePath: { eq: "softwares.jpg" }) {
        childImageSharp {
          fluid(maxWidth : 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "trainings.jpg" }) {
        childImageSharp {
          fluid(maxWidth : 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageThree: file(relativePath: { eq: "consulting.jpg" }) {
        childImageSharp {
          fluid(maxWidth : 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
         <Wrapper>
            <div className="section">
            <div className="section_child">
                    <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
                    <div className="text">
                      <h2>Consulting</h2>
                    </div>
              </div>
            
              <div className="section_child">
                    <Img fluid={data.imageTwo.childImageSharp.fluid} alt="" />
                    <div className="text">
                      <h2>Software Development</h2>
                    </div>
              </div>
              <div className="section_child">
                    <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
                    <div className="text">
                      <h2>Training</h2>
                    </div>
              </div>
            </div>
         </Wrapper>
  )
}

export default Details

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:auto;

  .section{
    width:90%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: center;
    padding-bottom: 100px;
       @media (max-width: 479px){
         flex-wrap: wrap;
       }
       @media (max-width: 991px){
         flex-wrap: wrap;
         justify-content: center;
       }
  }
  .section_child{
    display: flex;
    width: 527px;
    height:522.76px;
    flex-direction: column;
    padding-left:25px;
    @media (max-width: 479px){
      padding-left: 0px;
      padding-bottom:20px;
      margin:0;
      height:auto;
       }
       @media (max-width: 991px){
      padding-left: 0px;
      padding-bottom:20px;
      margin:0;
      height:auto;
      
       }
  }
  .section_child:hover{
     h2{
       background-color: var(--primaryColor);
       color: white;
       transition: 1s ease-in-out;
     }
  }
  
  
  .text{
    width:100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-items: flex-end;
    justify-content: flex-end;
    margin-top:-40px;
    z-index:99;

    h2{
      text-align: center;
      font-size:18px;
      width: 300px;
      background-color: #f8f8f8;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.25);
      color:#111111;
      padding:10px;
      align-items: center;
      justify-content: center;
      align-self: center;
      border-radius: 5px;
      padding-left:30px;
      padding-right:30px;
      padding-top:20px;
      padding-bottom: 20px;
      font-family: var(--family);
      font-weight : 800 !important;
      @media (max-width: 479px){
        font-size:15px;
       }
      
    }
  }
  
`







