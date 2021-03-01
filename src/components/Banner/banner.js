import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ana.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)


  return (
    <>
     <BannerInnerContainer></BannerInnerContainer>
     <BannerImage fluid={data.file.childImageSharp.fluid} />
     <BannerHeading>Your data has a story</BannerHeading>
     </>
  )
}

export default Banner




const BannerInnerContainer =styled.div`
   margin-top: 60px;
   width: 100%;
   height: 268px;
   background-color: #000000;

   @media (max-width: 991px){
     height: 268px;
   }
`

const BannerImage = styled(Image)`
     width: 292px;
  height: 263px;
  margin-top: -90px;
  object-fit: cover;
  border-radius: 20px;
`

const BannerHeading = styled.h1`
     font-size:22px;
     font-family:"Roboto";
     font-weight: 500;
`