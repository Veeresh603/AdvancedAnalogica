import React from 'react'
import styled from "styled-components"
import CourseTab from "../components/CourseTab"

import Hero from '../components/Hero/hero'
// import Overview from '../components/Overview'
import { graphql } from "gatsby";

function Course({data}) {
    const {title, overview, author, curriculum, course_image, id, slug} = data.strapiCourse
    
    return (
        <Wrapper>
         
        <Hero title={title} banner={course_image} />
        <CourseTab title={title} overview={overview} curriculum={curriculum} author={author} id={id} slug={slug} />
        {/* <Overview data={data.strapiCourse.overview} /> */}
      
        </Wrapper>
    )
}

export default Course

const Wrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;

`
export const query = graphql`
  
  query SingleCourse($slug: String) {
    strapiCourse(slug: {eq: $slug}) {
      title
      id
      slug
      overview
      curriculum {
        panel
        title
        subtopic {
          topic
          id
        }
      }
      course_image {
        childImageSharp {
          fluid(maxWidth:1000, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        name
        descrption
        author_image {
         url
        }
        rating
      }
      }
}
`

  