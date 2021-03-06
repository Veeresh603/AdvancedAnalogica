import React from 'react'
import styled from "styled-components"
import {Link} from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"



function Artificialintelligence() {
  const data = useStaticQuery(query)
 

    return (
        <Container>
            <div className="hero">
              <img className="image" src="https://res.cloudinary.com/dvnb8joxk/image/upload/e_blue:0/v1616562622/man_593333_f4ad36e33c.jpg" alt="banner" />
            </div>
       <div className="section">
            {data.allStrapiCourse.nodes.map((course, id) => {
              return(
                <div key={course.id} className="box-wrapper">
                <h4>{course.title}</h4>
                <div  className="box_section">
                  <Img style={{objectFit: "contain"}} className="image" fluid={course.course_image.childImageSharp.fluid} />
                  <div className="author">
                    <img className="author_img" src={course.author.author_image[0].url} alt="" />
                    <h3>{course.author.name}</h3>
                    </div>
                    <div className="para">
                      <p> {course.short_descrption}</p>
                      </div>
                      <LinkedTo to= {course.slug}>Read More </LinkedTo>
                  </div>
                </div>
              )
            })}
           

         </div>

        
        
        </Container>
    )
}

export default Artificialintelligence

export const query = graphql`
  {
    allStrapiCourse {
      nodes {
        id
        short_descrption
        title
        slug
        course_image {
          childImageSharp {
            fluid(maxWidth:1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        banner_img {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        author {
          name
          author_image {
            url
          }
        }
      }
    }
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  height: auto;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

 

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
  .image{
    width:100%;
    height:300px;
    object-fit: cover;
  
  }
  .section{
    display: flex;
    width:90%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height:auto;
    /* background-color:gray; */
  }
   .hero{
     width:100%;
     height:300px;
     background-color: blue;
   }
  .box-wrapper{
    display: flex;
    width:400px;
    height:auto;
    /* background-color:black; */
    flex-direction:column;
  }
  .box_section{
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    background-color:white;
    margin-left: 20px;
    border-left: 2px solid var(--primaryColor);
    padding:10px;
  }
  h4{
    color:black;
  }
 
  .author{
    display:flex;
    flex-direction: row;
    background-color: white;
    align-items: center;


    h3{
      padding-left:15px;
      font-size: 18px;
    }
    .author_img{
      width:50px;
      height:50px;
      border-radius: 50px;
    }
  }
  .para{
    /* padding:10px; */
    p{
      font-size:15px;
    }
  }
   
  
`
const LinkedTo = styled(Link)`


`