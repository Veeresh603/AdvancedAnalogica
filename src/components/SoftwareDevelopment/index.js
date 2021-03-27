import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Card from "../LeftImageCard/index"

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
    <Card
    image={data.file.childImageSharp.fluid}
    title="software development"
    desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
        cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
        cras porta velit integer maecenas."
    list={list}
  />
  )
}

export default SoftwareDevelopment


