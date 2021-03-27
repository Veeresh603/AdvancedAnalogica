import React from 'react'
import styled from "styled-components"
import AnchorTab from '../components/AnchorTab'
import Banner2 from '../components/Banner2'
import ConsultingGrid from '../components/ConsultingGrid'
import GetInTouch from '../components/GetInTouch'
import SoftwareDevelopmemtGrid from '../components/SoftwareDevelopmemtGrid'
import TrainingOnEmergingTechnologyGrid from '../components/TrainingOnEmergingTechnologyGrid'

function whatwedo() {
    return (
        <Container>
           <Banner2 /> 
           <AnchorTab />
           <ConsultingGrid />
           <SoftwareDevelopmemtGrid />
           <TrainingOnEmergingTechnologyGrid />
           <GetInTouch />
        </Container>
    )
}

export default whatwedo
const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  height: auto;
  align-items: flex-start;
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
