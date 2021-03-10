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
          fluid(maxWidth:1000, maxHeight: 1000) {
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
          <h2 className="borderLeftRight">software development</h2>
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
  font-family:"Maven Pro", sans-serif;
  @media (max-width:479px){
    margin-top: 0px;
  }
  
`

const Section = styled.div`
  display: flex;
  width: 90%;
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
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-left: 35px; */
  @media (max-width: 479px) {
    width:100%;
    order: 2;
    padding-left:9px;
  }
  h2 {
    font-weight: 600 !important;
    font-family:var(--family);
    color: var(--primaryColor);
   
    font-size: 25px;
    text-align: left;
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  
  .borderLeftRight::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  
  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  h4{
    padding-bottom:25px;
    font-weight: 400 !important;
    font-size: 20px;
    font-family: var(--family);
    color: var(--black)
  }
  h6{
    font-weight:900 !important;
    color:#000000;
    font-size : 15px;
    font-family: "Montserrat" !important;
  
  }
  ul,li{
        list-style: none;
        padding-left:0px;
        margin-top:-16px;

      }
`

const Section02 = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  padding: 50px;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 16px;
  .imageContainer{
    width:600px;
    height: 600px;
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
    margin-top: 5px;
  padding: 18px 24px;
  background-color: var(--primaryColor);
  color: #fff;
  border-radius: 6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-color 0.25s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  &:hover {
    color: var(--primaryColor);
    transform: translate3d(0px, -1px, 0px);
    background-color: #fff;
    border: 1px solid var(--black);
    box-shadow: none;
  }
      @media (max-width: 479px) {
  
    order: 5;
  }
`