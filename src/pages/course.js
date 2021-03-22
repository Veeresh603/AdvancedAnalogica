import React from 'react'
import styled from "styled-components"


function Artificialintelligence() {
  // const data = useStaticQuery(query)
    
    return (
        <Container>
         <h1>hello</h1>
        </Container>
    )
}

export default Artificialintelligence

// const query = graphql`
//   {
//     allStrapiCourse {
//       edges {
//         node {
//           title
//           overview
//           strapiId
//           lesson {
//             title
//             id
//             panel
//             subtopic {
//               id
//               subtopic
//             }
//           }
//         }
//       }
//     }
//   }
// `

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  height: auto;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

 

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }


`
