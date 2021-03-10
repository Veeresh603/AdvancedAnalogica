import React from "react"
import styled from "styled-components"
import production from "../../images/production.gif"

//   const data = useStaticQuery(graphql`
//     query {
//       file(relativePath: { eq: "ana.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 2000, quality: 90) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }

const Banner = () => {
  return (
   <BannerContainer>
      
   <img src={production} alt="" />     
   </BannerContainer>
  )
}

export default Banner


const BannerContainer = styled.div`
     width:100% ;
     height:600px ;
     margin-bottom:0px;
    
 > img{
   width:100%;
   height: 500px;
   object-fit:cover;
 }
    
`