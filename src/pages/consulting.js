import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Banner2 from "../components/Banner2"

import SoftwareDevelopmemtGrid from "../components/SoftwareDevelopmemtGrid"
import TrainingOnEmergingTechnologyGrid from "../components/TrainingOnEmergingTechnologyGrid"
import GetInTouch from "../components/GetInTouch"

function Consulting() {
  const data = useStaticQuery(graphql`
    query {
      consulting: file(relativePath: { eq: "artificial.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      software: file(relativePath: { eq: "webdev.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Banner2
        title="Consulting"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas. ."
      />
      <TrainingOnEmergingTechnologyGrid
        title="artificial intelligence"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
        img={data.consulting.childImageSharp.fluid}
      />

      <SoftwareDevelopmemtGrid
        title="internet of things"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
        img={data.software.childImageSharp.fluid}
      />
      <TrainingOnEmergingTechnologyGrid
        title="cyber security"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
        img={data.software.childImageSharp.fluid}
      />
      <GetInTouch />
    </Container>
  )
}

export default Consulting

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
  .ourreviews {
    @media (max-width: 479px) {
      margin-top: -5px !important;
    }
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
`
