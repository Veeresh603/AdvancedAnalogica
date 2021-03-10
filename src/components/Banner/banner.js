import React from "react"
import styled from "styled-components"
import videos from "../../images/video(3).mp4"

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
    <div className="section">
      <div className="section_video">
      <video className="bg__header" preload='auto'  loop autoPlay muted>
 <source  src={videos} type="video/mp4" />
</video>
   
      </div>
      </div>
    </BannerContainer>
  )
}

export default Banner

const BannerContainer = styled.div`
display:flex;
flex-flow: row;
justify-content: center;
align-items: center;
object-fit:cover;
  width: 100%;
  height: 500px;
  margin-bottom: 300px;

  > img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  .section {
    display:flex;
flex-flow: row;
justify-content: center;
align-items: center;
object-fit:contain;
  width: 100%;
  height: 500px;
  }

  .bg__header{
    width:100%;
    height:100%;
  }
  .full{
    width:100%;
  }

`
