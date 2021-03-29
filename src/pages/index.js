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

const ourwork = [
  {
    id: 1,
    img: "https://www.fillmurray.com/370/240",
    h3: "Web Penetration Application",
    h6:
      "Web applications is the most used digital technology there is and with this",
    link: "#",
  },
  {
    id: 2,
    img: "https://www.fillmurray.com/370/350",
    h3: "Cloud Security Practitioner",
    h6:
      "Every organization is migrating to the cloud in order to save money, but",
    link: "#",
  },
  {
    id: 3,
    img: "https://www.fillmurray.com/370/240",
    h3: "Android Application Penetration Testing",
    h6:
      "We are always connected to our mobile phones, using lot’s of applications",
    link: "#",
  },
  {
    id: 4,
    img: "https://www.fillmurray.com/370/350",
    h3: "Ethical Hacking1.0",
    h6:
      "Ethical hacking also known as penetration testing/ cyber security is a practice of",
    link: "#",
  },
  {
    id: 5,
    img: "https://www.fillmurray.com/370/240",
    h3: "Diploma in Machine Learning",
    h6:
      "Web applications is the most used digital technology there is and with this",
    link: "#",
  },
  {
    id: 6,
    img: "https://www.fillmurray.com/370/350",
    h3: "Diploma in Cloud Security",
    h6:
      "The course module is divided into two semester covering both practical and theoretical",
    link: "#",
  },
]

function Index() {

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
    }
  `)
  return (
    <Container>
      <Banner />
      <WhatweDO />
      <Details />
      <ConsultingGrid
        title="consulting"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas."
        img={data.consulting.childImageSharp.fluid}
      />
      <SoftwareDevelopmemtGrid
        title="software development"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas."
        img={data.software.childImageSharp.fluid}
      />
      <TrainingOnEmergingTechnologyGrid
        title="training on emerging technologies"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas."
        img={data.training.childImageSharp.fluid}
      />
      <OurWork title="our work" data={ourwork}/>
      <TechnologyStack />
      <WhoWeAre />
      <WhatWeAreThinking />
      <LetsTalk />
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
