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
                    <Image className="details_image01" fluid={data.imageThree.childImageSharp.fluid} alt="" />
                    <div className="text">
                      <h2>Consulting</h2>
                    </div>
              </div>
            
              <div className="section_child01">
                    <Image  className="details_image01" fluid={data.imageTwo.childImageSharp.fluid} alt="" />
                    <div className="text">
                      <h2>Software Development</h2>
                    </div>
              </div>
              <div className="section_child01">
                    <Image className="details_image01" fluid={data.imageOne.childImageSharp.fluid} alt="" />
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
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:auto;

  .section{
    grid-area: 1/2/2/11;
    width:100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: center;
    padding-bottom: 100px;
    justify-content: space-evenly;
       @media (max-width: 479px){
         flex-direction:column;
         flex-wrap: wrap;
       
       }
       @media (max-width: 767px){
        flex-wrap: wrap;

       }
       @media (max-width: 991px){
         flex-wrap: nowrap;
         justify-content: center;
       }
  }
  .details_image01{
    border-radius: 5px;
  }
  .section_child{
    display: flex;
    width: 400px;
    height:auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
       @media (max-width: 991px){
      padding-left: 10px;
      padding-bottom:20px;
      margin:0;
      height:auto;
      width:250px;

      
       }
      
       @media (max-width: 479px){
      padding-left: 0px;
      padding-bottom:20px;
      margin:0;
      height:auto;
      width:350px;
      height:auto;
       }
       
  }
  .section_child01{
    display: flex;
    width: 400px;
    height:auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left:10px;
    /* padding-left: 25px; */
 
       @media (max-width: 991px){
      padding-left: 10px;
      padding-bottom:20px;
      margin:0;
      height:auto;
      width:250px;
      
       }
       @media (max-width: 479px){
      padding-left: 0px;
      padding-bottom:20px;
      margin:0;
      width:350px;
      height:auto;
       }
      
       
       
  }
  .section_child:hover{
     h2{
       background-color: var(--primaryColor);
       color: white;
       transition: 0.5s ease-in-out;
     }
  }
  .section_child01:hover{
     h2{
       background-color: var(--primaryColor);
       color: white;
       transition: 0.5s ease-in-out;
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
      
       @media (max-width: 991px){
        font-size:10px;
        width:150px;
       }
       @media (max-width: 479px){
        font-size:15px;
        width:250px;
       }
    }
  }
  
`
const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* z-index: 1; */
   // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: contain !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; // needed for IE9+ polyfill
  }
`







