import React from "react"
import styled from "styled-components"
import "swiper/css/swiper.css"
import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const data = [
  {
    id: 1,
    img: "https://www.fillmurray.com/370/240",
    h3: "Web Penetration Application",
    h6:
      "Web applications is the most used digital technology there is and with this",
    link: "#",
  },
  {
    id: 2,
    img: "https://www.fillmurray.com/370/350",
    h3: "Cloud Security Practitioner",
    h6:
      "Every organization is migrating to the cloud in order to save money, but",
    link: "#",
  },
  {
    id: 3,
    img: "https://www.fillmurray.com/370/240",
    h3: "Android Application Penetration Testing",
    h6:
      "We are always connected to our mobile phones, using lot’s of applications",
    link: "#",
  },
  {
    id: 4,
    img: "https://www.fillmurray.com/370/350",
    h3: "Ethical Hacking1.0",
    h6:
      "Ethical hacking also known as penetration testing/ cyber security is a practice of",
    link: "#",
  },
  {
    id: 5,
    img: "https://www.fillmurray.com/370/240",
    h3: "Diploma in Machine Learning",
    h6:
      "Web applications is the most used digital technology there is and with this",
    link: "#",
  },
  {
    id: 6,
    img: "https://www.fillmurray.com/370/350",
    h3: "Diploma in Cloud Security",
    h6:
      "The course module is divided into two semester covering both practical and theoretical",
    link: "#",
  },
]

function courseone() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Wrapper>
      <h2 className="borderLeftRight">our work</h2>
      <Slider {...settings}>
        {data.map(d => {
          return (
            <div className="first">
              <img src={d.img} alt="" />
              <div className="text">
                <h4>{d.h3}</h4>
              </div>
            </div>
          )
        })}
      </Slider>
    </Wrapper>
  )
}

export default courseone

const Wrapper = styled.div`
  margin-top: 200px;
  width: 90%;
  height: auto;
  padding: 40px;
  display:flex;
  flex-direction: column;
  align-self: center;
  @media (max-width:479px){
    margin:0px;
  }
  @media (max-width:767px){
    margin:0px;
  }
  .first {
    width: 370px;
    height: auto;
  }
  .first:hover {
    h4 {
      background-color: var(--primaryColor);
      color: white;
      transition: 1s ease-in-out;
    }
  }
  .text {
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-end;
  }
  img {
    width: 100%;
    height: auto;
  }
  h4 {
    width: 300px;
    background-color: #f8f8f8;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    color: #111111;
    height: auto;
    padding: 20px;
    margin-top: -25px;
    font-size: 15px;
    @media (max-width:991px){
      font-size: 10px;
      width: calc(300px - 130px);
      height: auto;
    }
  }
  h2 {
    color: var(--primaryColor);
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 25px;
    width:124px;
  }
  .slick-slide img {
    margin: auto;
    align-self: center;
  }
  .slick-slide {
    margin-left: 20px;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .borderLeftRight::after {
    content: "";
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