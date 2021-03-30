import React from "react"
import styled from "styled-components"
import Banner2 from "../components/Banner2"
import BuildAbetterFuture from "../components/BuildAbetterFuture"
import OurApproach from "../components/OurApproach"
import OurWork from "../components/OurWork"
import SomeSection from "../components/SomeSection"


function whoweare({data}) {
  return (
    <Container>
      <Banner2
        title="who we are"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas. Pellentesque scelerisque at amet tempor donec in tincidunt. Vulputate platea semper lacinia aliquam egestas."
      />
      <OurApproach />
      <OurWork title="get to know our people" data={data.allStrapiOurreviews} />
      <BuildAbetterFuture />
      <SomeSection />
      <OurWork className="ourreviews" title="our reviews" data={data.allStrapiOurreviews} />

    </Container>
  )
}

export default whoweare

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
  .ourreviews{
    @media (max-width:479px){
      margin-top: -5px !important;
}
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
`
export const query = graphql`
  {
    allStrapiOurreviews {
      nodes {
        ourwork_image {
          url
        }
        title
      }
    }
  }
`
