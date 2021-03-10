import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

function Consulting() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "books.jpg" }) {
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
          <div className="imageContainer">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        </Section01>
        <Section02>
          <h2>consulting</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas.
          </h4>
          <ul>
            <li>
              <h6>Artificial Intelligence</h6>
            </li>
            <li>
              <h6>Internet of things</h6>
            </li>{" "}
            <li>
              <h6>Cyber Security & services</h6>
            </li>
          </ul>
          <LinkTo to="#">Learn More</LinkTo>
        </Section02>
      </Section>
    </Wrapper>
  )
}

export default Consulting

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: 50px;
`
const Section = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 479px) {
    width: 100%;
  }
`

const Section01 = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-left: -76px; */
  .imageContainer {
    width: 400px;
  }
  @media (max-width: 479px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

const Section02 = styled.div`
  display: flex;
  width: 50%;
  height: auto;

  flex-flow: column wrap;
  /* justify-content: space-evenly; */
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 36px;
  @media (max-width: 479px) {
    margin-left: 0px;
    width: 100%;
  }
  > h4 {
    padding-bottom: 2px;
    font-weight: 300 !important;
    font-size: 20px;
  }

  > h2 {
    padding-bottom: 0px;
    font-weight: 800 !important;
    color: #000000;
    font-family: "Roboto";
    font-size: 20px;
  }
  ul,
  li {
    list-style: none;
    padding-left: 0px;
    margin-top:-16px;

  }
  h6 {
    font-weight: 900 !important;
    color: #000000;
    font-family: "Roboto";
    font-size:15px;
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
`
