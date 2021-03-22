import React from 'react'
import styled from "styled-components"
import CourseTab from "../components/CourseTab"

import Hero from '../components/Hero/hero'
// import Overview from '../components/Overview'
import { graphql } from "gatsby";

function Course({data}) {
    const {title, overview, author, curriculum} = data.strapiCourse
    
    return (
        <Wrapper>
         
        <Hero title={title}/>
        <CourseTab title={title} overview={overview} curriculum={curriculum} author={author} />
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
          id
          title
          subtopic {
            id
            topic
          }
        }
        author {
          name
          descrption
          author_image {
            formats {
              small {
                url
              }
            }
          }
        }
      }
}
`

  