import React from "react"
import styled from "styled-components"
import Banner2 from "../components/Banner2"
import BuildAbetterFuture from "../components/BuildAbetterFuture"
import OurApproach from "../components/OurApproach"
import OurWork from "../components/OurWork"
import SomeSection from "../components/SomeSection"

const data = [
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
  

function whoweare() {
  return (
    <Container>
      <Banner2
        title="who we are"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas. Pellentesque scelerisque at amet tempor donec in tincidunt. Vulputate platea semper lacinia aliquam egestas."
      />
      <OurApproach />
      <OurWork title="get to know our people" data={data} />
      <BuildAbetterFuture />
      <SomeSection />
      <OurWork className="ourreviews" title="our reviews" data={data} />

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
