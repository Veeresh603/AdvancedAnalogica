import React from "react"
import styled from "styled-components"
import videos from "../../images/video(4).mp4"
import Fade from "react-reveal/Fade"

function banner() {
  return (
    <Wrapper>
      <div className="banner_section">
        <video className="bg__header" preload="auto" loop autoPlay muted>
          <source src={videos} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="banner_heading">
          <Fade up>
            <h1>
              RIGHT<br></br> INSIGHTS
            </h1>
          </Fade>

          <h2>CAN INSPIRE BRILLIANT IDEAS</h2>
        </div>
      </div>
      {/* <div className="section">
        <video className="bg__header" preload="auto" loop autoPlay muted>
          <source src={videos} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="heading">
        <div className="section_title">
          <Fade up>
            <h1>
              RIGHT<br></br> INSIGHTS
            </h1>
          </Fade>

          <h2>CAN INSPIRE BRILLIANT IDEAS</h2>
        </div>
      </div> */}
    </Wrapper>
  )
}

export default banner

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-color: rgb(16, 29, 51, 0.8);

  .banner_section {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 90vh;
  }

  .bg__header {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    grid-area: 1/1/2/12;
    opacity: 0.7;
  }
  .banner_heading {
    grid-area: 1/2/2/11;
    z-index: 1;
    display: flex;
    flex-direction: column;
    place-content: center;

    h1 {
      font-size: 60px;
      font-weight: 800;
      border-left: 4px solid var(--primaryColor);
      color: white;
      @media (max-width: 479px) {
        font-size: 35px;
      }
      @media (max-width: 767px) {
        font-size: 40px;
      }
    }
    h2 {
      width: 50%;
      font-size: 29px;
      font-weight: 800;
      background-color: var(--primaryColor);
      padding: 10px 10px;
      letter-spacing: 2px;
      margin-top: -50px;
      color:#fff;
      @media (max-width: 479px) {
        font-size: 12px;
        margin-top: -30px;
        width: 100%;
      }
      @media (max-width: 767px) {
        font-size: 20px;
        margin-top: -35px;
      }
    }
  }
`

// const Wrapper = styled.div`
//   display: flex;
//   position: relative;
//   width: 100%;
//   height: 90vh;

//   background-color: rgb(16, 29, 51, 0.8);
//   @media (max-width: 479px) {
//     height: 90vh;
//   }

//   .heading {
//     display: grid;
//     grid-template-columns: repeat(11, 1fr);
//     grid-template-rows: 1fr;
//     width: 100%;
//     /* background-color: gray; */
//     height: 300px;
//     z-index: 1;
//     /* justify-content: center; */
//     color: white;
//     @media (max-width: 479px) {
//       height: auto;
//     }
//     @media (max-width: 991px) {
//       height: auto;
//     }
//     @media (max-width: 767px) {
//       height: auto;
//     }
//     h1 {
//       grid-area: 1/2/2/11;
//       font-size: 70px;
//       font-weight: 800;
//       border-left: 4px solid var(--primaryColor);
//       @media (max-width: 479px) {
//         font-size: 35px;
//       }
//       @media (max-width: 767px) {
//         font-size: 40px;
//       }
//     }
//     h2 {
//       font-size: 29px;
//       font-weight: 800;
//       background-color: var(--primaryColor);
//       padding: 10px 10px;
//       letter-spacing: 2px;
//       margin-top: -50px;
//       @media (max-width: 479px) {
//         font-size: 12px;
//         margin-top: -30px;
//       }
//       @media (max-width: 767px) {
//         font-size: 20px;
//         margin-top: -35px;
//       }
//     }
//   }
//   .section_title {
//     grid-area: 1/2/2/6;
//     display: flex;
//     width: 100%;
//     height: auto;
//     flex-direction: column;
//     align-items: flex-start;
//     /* padding-left: 103px;
//         margin-right:-20px; */
//     @media (max-width: 479px) {
//       /* padding-left:25px; */
//     }
//     @media (max-width: 991px) {
//       /* padding-left:25px; */
//     }
//   }
//   .section {
//     position: absolute;
//     width: 100%;
//     height: 90vh;
//     opacity: 0.7;
//     @media (max-width: 479px) {
//       height: 90vh;
//     }
//   }

//   .bg__header {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `
