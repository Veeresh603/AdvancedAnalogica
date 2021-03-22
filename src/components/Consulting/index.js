import React from "react"
import Card from "../Cards/index"
import { useStaticQuery, graphql } from "gatsby"

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

function Consulting() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "books.jpg" }) {
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
    <div>
      <Card
        img={data.file.childImageSharp.fluid}
        title="consulting"
        desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas."
        list={list}
      />
    </div>
  )
}

export default Consulting
