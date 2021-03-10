import React from "react"
import styled from "styled-components"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"


const data = [
  {
    id: 1,
    img: "https://www.fillmurray.com/340/360",
    h3: "Web Penetration Application",
    h6:
      "Web applications is the most used digital technology there is and with this",
    link: "#",
  },
  {
    id: 2,
    img: "https://www.fillmurray.com/340/460",
    h3: "Cloud Security Practitioner",
    h6:
      "Every organization is migrating to the cloud in order to save money, but",
    link: "#",
  },
  {
    id: 3,
    img: "https://www.fillmurray.com/340/360",
    h3: "Android Application Penetration Testing",
    h6:
      "We are always connected to our mobile phones, using lot’s of applications",
    link: "#",
  },
  {
    id: 4,
    img: "https://www.fillmurray.com/340/460",
    h3: "Ethical Hacking1.0",
    h6:
      "Ethical hacking also known as penetration testing/ cyber security is a practice of",
    link: "#",
  },
  {
    id: 5,
    img: "https://www.fillmurray.com/340/360",
    h3: "Diploma in Machine Learning",
    h6:
      "Web applications is the most used digital technology there is and with this",
    link: "#",
  },
  {
    id: 6,
    img: "https://www.fillmurray.com/340/460",
    h3: "Diploma in Cloud Security",
    h6:
      "The course module is divided into two semester covering both practical and theoretical",
    link: "#",
  },
]

function courseone() {
  const params = {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  }
  return (
    <Wrapper>
      <Text>
        <h2 className="borderLeftRight">our work</h2>
      </Text>
      <div className="section_items">
        <Swiper className="" {...params}>
          {data.map(d => {
            return(
              <div className="section_child_items">
              <div className="section_img">
                <img src={d.img} alt="" />
              </div>
              <div className="section_text">
                <h4>{d.h3}</h4>
              </div>
            </div>
            )
           
          })}
        </Swiper>
      </div>
    </Wrapper>
    // <Wrapper>
    //     <Text>
    //     <h2>our work</h2>
    //     </Text>

    //   <Swiper className="swiper" {...params}>
    //     {data.map(d => (
    //       <Wrapper>
    //         <img src={d.img} alt="" />
    //         <Text01>
    //         <h3>{d.h3}</h3>
    //         </Text01>

    //       </Wrapper>
    //     ))}
    //   </Swiper>
    // </Wrapper>
  )
}

export default courseone

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  padding-top: 80px;

  /* padding: 100px; */
  padding-bottom: 100px;

  .section {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    width: 80%;
  }
  .section_items {
    width: 100%;
    /* padding: 30px; */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
  }
  .section_child_items:hover{
    cursor:pointer;
    h4{
      background-color: var(--primaryColor);
    }
  }
  .section_child_items {
    width: auto !important;
    display: flex !important;
    flex-direction: column !important;
    margin-right: 15px !important;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
  }
  .section_img {
    > img {
    @media (min-width: 1400px) {
      width: 450px;
      height: 450px;
    }
  }
  }

  .section_text {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    justify-items: center;
    align-content: center;
  }

  h4 {
    text-align: center;
    font-weight: 600 !important;
    font-size: 14px;
    background-color: black;
    width:400px;
    color: white;
    padding: 10px;
    padding-left:30px;
      padding-right:30px;
      padding-top:20px;
      padding-bottom: 20px;
    margin-top: -25px;
    font-family: var(--family);
  }
`

const Text = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  align-self: flex-start;
  > h2 {
    font-weight: 800 !important;
    color: var(--primaryColor);
    font-size: 20px;
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  
  .borderLeftRight::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  
  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

