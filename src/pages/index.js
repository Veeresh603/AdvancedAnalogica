import React from "react"
import Banner from "../components/Banner/banner"
import styled from "styled-components"
import Details from "../components/Details/Details"
import WhatweDO from "../components/WhatWeDo"

import OurWork from "../components/OurWork/index"
import TechnologyStack from "../components/TechnologyStack/index"
import WhoWeAre from "../components/WhoWeAre/index"
import WhatWeAreThinking from "../components/WhatWeAreThinking/index"
import LetsTalk from "../components/LetsTalk/index"
import ConsultingGrid from "../components/ConsultingGrid"
import SoftwareDevelopmemtGrid from "../components/SoftwareDevelopmemtGrid"
import TrainingOnEmergingTechnologyGrid from "../components/TrainingOnEmergingTechnologyGrid"
import { useStaticQuery, graphql } from "gatsby"
// import OurWorks from "../components/OurWorks"



function Index() {

  const list = [
    {
      id: 1,
      title: "Artificial Intelligence",
    },
    {
      id: 2,
      title: "Internet of things",
    },
    {
      id: 3,
      title: "Cyber Security & services",
    },
  ]
  
  const data = useStaticQuery(graphql`
    query {
      consulting: file(relativePath: { eq: "books.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      software: file(relativePath: { eq: "beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      training: file(relativePath: { eq: "pexels.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
      allStrapiOurwork {
        nodes {
          title
          ourwork_image {
            url
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Banner />
      <WhatweDO />
      <Details title1="consulting" title2="software development" title3="training" image1={data.imageOne.childImageSharp.fluid} image2={data.imageTwo.childImageSharp.fluid} image3={data.imageThree.childImageSharp.fluid} />
      <ConsultingGrid
        list={list}
        title="consulting"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas."
        img={data.consulting.childImageSharp.fluid}
        link="/consulting"
      />
      <SoftwareDevelopmemtGrid
        title="software development"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas."
        img={data.software.childImageSharp.fluid}
        list={list}
        link="softwaredevelopment"
      />
      <TrainingOnEmergingTechnologyGrid
        title="training on emerging technologies"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas."
        img={data.training.childImageSharp.fluid}
        classroom="classroom" corporate="corporate & online"
        list={list}
        link="training"
      />
      <OurWork title="our work" data={data.allStrapiOurwork}/>
      <TechnologyStack />
      <WhoWeAre />
      <WhatWeAreThinking />
      <LetsTalk />
      {/* <OurWorks /> */}
    </Container>
  )
}

export default Index
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
