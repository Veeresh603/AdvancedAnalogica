import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

function Training() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pexels.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
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
          <div className="imageContainer">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        </Section01>
        <Section02>
          <h2 className="borderLeftRight">training on emerging technology</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas.
          </h4>
          <Section03>
            <ClassRoom>
              <p>Classroom</p>
              <ul>
                <li>
                  <h6>Machine Learning</h6>
                </li>
                <li>
                  <h6>Artificial Intelligence</h6>
                </li>{" "}
                <li>
                  <h6>Cyber Security</h6>
                </li>
              </ul>
            </ClassRoom>
            <Corporate>
              <p>Corporate & online</p>
              <ul>
                <li>
                  <h6>Machine Learning</h6>
                </li>
                <li>
                  <h6>Artificial Intelligence</h6>
                </li>{" "}
                <li>
                  <h6>Cyber Security</h6>
                </li>
              </ul>
            </Corporate>
          </Section03>
          <LinkTo to="#">Learn More</LinkTo>
        </Section02>
      </Section>
    </Wrapper>
  )
}

export default Training

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  padding-bottom: 50px;
  font-family: var(--family);
  @media (max-width:479px){
    margin-top: 0px;
  }
`
const Section = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 479px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  @media (max-width:991px){
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`

const Section01 = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  
  /* margin-left: -76px; */

  .imageContainer {
    width: 500px;
    height: 500px;
  }
  @media (max-width: 479px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    justify-content: center;
  align-items: center;
    .imageContainer {
    width: 400px;
    height: 400px;
  }
  }
  @media (max-width: 991px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    justify-content: center;
  align-items: center;
   

  }
 
`

const Section02 = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  /* padding: 50px; */
  flex-flow: column wrap;
  padding-bottom: 36px;
  justify-content: center;
  align-content: center;
  align-self: center;
  
  @media (max-width: 479px) {
    margin-left: 0px;
    width: 80%;
    padding-left:9px;

  }
 
  > h4 {
    padding-bottom: 5px;
    font-weight: 400 !important;
    font-size: 20px;
    font-family: "Montserrat" !important;
    color: var(--black);
  }

  > h2 {
    font-weight: 800 !important;
    color: #000000;
    font-family: "Montserrat" !important;
    font-size: 25px;
    color: var(--primaryColor);
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
`

const ClassRoom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ul,
  li {
    list-style: none;
    padding-left: 0px;
    margin-top: -16px;
  }
  p {
    font-weight: 600;
    font-size: 15px;
    color: #848484;
    font-family: "Montserrat", sans-serif !important;
  }
  h6 {
    font-weight: 900 !important;
    color: #000000;
    font-family: "Roboto";
    font-size: 15px;
    font-family: "Montserrat", sans-serif;
  }
`

const Corporate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 70px;
  @media (max-width: 479px) {
    margin-left: 0px;
  }

  ul,
  li {
    list-style: none;
    padding-left: 0px;
    margin-top: -16px;
  }
  p {
    font-weight: 600;
    font-size: 15px;
    color: #848484;
    font-family: "Montserrat", sans-serif !important;
  }
  h6 {
    font-weight: 900 !important;
    color: #000000;
    font-family: "Montserrat", sans-serif !important;
    font-size: 15px;
  }
`

const Section03 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around; */
`

const LinkTo = styled(Link)`
  margin-top: 5px;
  width:150px;
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
`
