import React from "react"
import Banner from "../components/Banner/banner"
import styled from "styled-components"
import Details from "../components/Details/Details"
import WhatweDO from "../components/WhatWeDo"
import Training from "../components/TrainingonEmergingTechnology/index"
import SoftwareDevelopment from "../components/SoftwareDevelopment/index"
import Consulting from "../components/Consulting/index"
import OurWork from "../components/OurWork/index"

export default () => (
  <Container>
    <Banner />
    <WhatweDO />
    <Details />
    <Training />
    <SoftwareDevelopment />
    <Consulting />
    <OurWork />
  </Container>
)

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  height: auto;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  > h1 {
    margin-top: 50px;
    border-bottom: 1px solid #ff002b;
    @media (max-width: 479px) {
      text-align: center;
      font-size: 17px;
    }
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
`


