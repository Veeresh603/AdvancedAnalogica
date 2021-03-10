import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

function SoftwareDevelopment() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "beach.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Section>
        <Section01>
          <h2>software development</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas.
          </h4>
          <ul>
            <li>
              <h6>Artificial Production</h6>
            </li>
            <li>
              <h6>Web Development</h6>

            </li>
          </ul>
          <LinkTo to="#">Learn More</LinkTo>

        </Section01>

        <Section02>
          <div className="imageContainer">
            <Img fluid={data.file.childImageSharp.fluid} />

          </div>

        </Section02>
      </Section>
    </Wrapper>
  )
}

export default SoftwareDevelopment

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 50px;
  @media (max-width:479px){
    margin-top: 0px;
  }
  
`

const Section = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: row;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: flex-start;

  @media (max-width:479px){
    flex-direction: column;
    justify-content: center;
  }
 
`

const Section01 = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;
  /* margin-left: 35px; */
  @media (max-width: 479px) {
    width:100%;
    order: 2;
    padding-left:9px;
  }
  h2 {
    padding-bottom: 25px;
    font-weight: 800 !important;
    color: #000000;
    font-family: "Roboto";
    font-size: 20px;
    text-align: left;
  }
  h4{
    padding-bottom:25px;
    font-weight:300 !important;
    font-size : 20px;
    text-align: left;
 
  }
  h6{
    font-weight:900 !important;
    color:#000000;
    font-size : 15px;
    font-family: "Roboto"
  
  }
  ul,li{
        list-style: none;
        padding-left:0px;
      }
`

const Section02 = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  /* padding: 50px; */
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 16px;
  .imageContainer{
    width:400px;
  }
  @media (max-width: 479px) {
    width:111%;
    padding:0px;
    padding-bottom: 50px;
    justify-content:center;
    align-items: center;
  }
`


const LinkTo = styled(Link)`
      padding: 12px 24px;
  background-color: #fff;
  color: #000000;
  border-radius: 6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  text-decoration: none;
  border: 1px solid #000000;
&:hover {
  transform: translate3d(0px,-1px,0px);
  background-color: #fff;
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}
      @media (max-width: 479px) {
  
    order: 5;
  }
`