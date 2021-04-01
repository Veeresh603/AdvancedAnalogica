import React from "react"
import styled from "styled-components"
import Banner2 from "../components/Banner2"
import ConsultingGrid from "../components/ConsultingGrid"
import { useStaticQuery, graphql } from "gatsby"
import SoftwareDevelopmemtGrid from "../components/SoftwareDevelopmemtGrid"
import TrainingOnEmergingTechnologyGrid from "../components/TrainingOnEmergingTechnologyGrid"
import GetInTouch from "../components/GetInTouch"
import scrollTo from "gatsby-plugin-smoothscroll"

function Services() {
  const data = useStaticQuery(graphql`
    query {
      consulting: file(relativePath: { eq: "macbook-pad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      software: file(relativePath: { eq: "purple-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      training: file(relativePath: { eq: "softwares.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      services: file(relativePath: { eq: "softwares.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Banner2
      img={data.services.childImageSharp.fluid}
        title="services"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas. ."
      />
      <Wrapper>
        <div className="anchor_tab">
          <div className="anchor_tab_section">
            <div>
              <button
                className="button"
                onClick={() => scrollTo("#consulting")}
              >
                consulting
              </button>
            </div>
            <div>
              <button className="button" onClick={() => scrollTo("#software")}>
                software development
              </button>
            </div>{" "}
            <div>
              <button className="button" onClick={() => scrollTo("#training")}>
                training
              </button>
              {/* <Link to="training" className="link" >training</Link> */}
            </div>
          </div>
        </div>
      </Wrapper>
      <ConsultingGrid
        id="consulting"
        img={data.consulting.childImageSharp.fluid}
        title="data science consulting"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
      />
      <SoftwareDevelopmemtGrid
        id="software"
        img={data.software.childImageSharp.fluid}
        title="software development"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
      />
      <TrainingOnEmergingTechnologyGrid
        id="training"
        img={data.training.childImageSharp.fluid}
        title="training and certifiation"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
      />
      <GetInTouch />
    </Container>
  )
}

export default Services

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
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: -30px;
  z-index: 1;
  padding-bottom: 150px;
  .anchor_tab {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 70px;
    grid-column-gap: 5px;
    grid-row-gap: 0px;
  }
  .anchor_tab_section {
    grid-area: 1/7/2/12;
    background-color: var(--primaryColor);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 991px) {
      grid-area: 1/5/2/12;
    }
    @media (max-width: 767px) {
      grid-area: 1/2/2/12;
    }
    @media (max-width: 479px) {
      grid-area: 1/1/2/12;
    }
  }
  .button {
    font-size: 20px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    @media (max-width: 767px) {
      font-size: 18px;
    }
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
`
