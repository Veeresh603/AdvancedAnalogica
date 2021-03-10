import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Details = () => {
  const data = useStaticQuery(graphql`
    query {
     imageOne: file(relativePath: { eq: "softwares.jpg" }) {
        childImageSharp {
          fluid(maxWidth : 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageTwo: file(relativePath: { eq: "trainings.jpg" }) {
        childImageSharp {
          fluid(maxWidth : 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imageThree: file(relativePath: { eq: "consulting.jpg" }) {
        childImageSharp {
          fluid(maxWidth : 1000) {
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
                    <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
                    <div className="text">
                      <h2>Training</h2>
                    </div>
              </div>
              <div className="section_child">
                    <Img fluid={data.imageTwo.childImageSharp.fluid} alt="" />
                    <div className="text">
                      <h2>Software Development</h2>
                    </div>
              </div>
              <div className="section_child">
                    <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
                    <div className="text">
                      <h2>Consulting</h2>
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
  height: auto;

  .section{
    width:80%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: center;
    justify-content: space-evenly;
       
       @media (max-width: 479px){
         flex-wrap: wrap;
       }
  }
  .section_child{
    display: flex;
    width: 400px;
    flex-direction: column;
    padding-left:10px;
  }
 
  .text{
    width:100%;
    display: flex;
    flex-direction:row;
    align-items: flex-end;
    justify-items: flex-end;
    justify-content: flex-end;
    margin-top:-40px;
    z-index:99;

    h2{
      font-size:22px;
      width: auto;
      background-color: black;
      color:white;
      padding:10px;
      padding-left:30px;
      padding-right:30px;
      @media (max-width: 479px){
        font-size:15px;
       }
      
    }
  }
  
`







