import React from "react"
import styled from "styled-components"
import Banner2 from "../components/Banner2"
import Emerging from "../components/TrainingOnEmergingTechnologyGrid"
import { useStaticQuery, graphql } from "gatsby"
import Details from "../components/Details/Details"
import OurWork from "../components/OurWork"
import GetInTouch from "../components/GetInTouch"

function Training() {
  const data = useStaticQuery(graphql`
    query {
      emerging: file(relativePath: { eq: "rocket.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      imageOne: file(relativePath: { eq: "machinelearning.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      imageTwo: file(relativePath: { eq: "robot1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      imageThree: file(relativePath: { eq: "cybersecurity.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      training: file(relativePath: { eq: "arrow.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      allStrapiOurreviews {
        nodes {
          ourwork_image {
            url
          }
          title
        }
      }
    }
  `)
  return (
    <Container>
      <Banner2
        img={data.training.childImageSharp.fluid}
        title="training"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas. ."
      />
      <Emerging
        title="emerging technology"
        img={data.emerging.childImageSharp.fluid}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet   morbi amet velit ut. Sit in cras porta velit integer maecenas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
      />
      <Details
        title="classroom corporate & online"
        title1="machine learning"
        title2="artificial intelligence"
        title3="cyber security"
        image1={data.imageOne.childImageSharp.fluid}
        image2={data.imageTwo.childImageSharp.fluid}
        image3={data.imageThree.childImageSharp.fluid}
      />
      <OurWork style={{marginTop: "-88px"}} title="our reviews" data={data.allStrapiOurreviews} />
      <GetInTouch />
    </Container>
  )
}

export default Training

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

