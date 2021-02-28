import React from "react"
import DataDriven from "../images/datadriven.png"
import Banner from "../components/Banner/banner"
import styled from "styled-components"
import Details from "../components/Details/details"
import AIimage from "../images/image 9.png"
import CourseOne from "../components/CouresOne/courseone"
import DataDrivenServices from "../components/Data-drivenServices/datadriven"
import SocailContainer from "../components/SocialContainer/social"

export default () => (
  <Container>
    <Banner />
     <DataDrivenImage src={DataDriven} />
    <h1>Some of your Data-driven services</h1>
    <DataDrivenServices />
    <h1>Industry credited certification in emerging technologies</h1>
    <CourseOne />
    <ImageContainer>
         <img src={AIimage} alt="" />
    </ImageContainer>
    <Details />
     <SocailContainer />
  </Container>
)


const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  >h1{
    margin-top: 50px;
    border-bottom: 1px solid #ff002b;
  }

`

const DataDrivenImage = styled.img`
    width:254px;
    height: 196px;
    object-fit:cover;
    margin-top: 50px;
`

const ImageContainer = styled.div`
     display: flex;
     justify-content: center;
     width: 100%;
     height: 344px;
     margin-top: 70px;


     > img{
       width: 348px;
       height: 308px;
     }
`