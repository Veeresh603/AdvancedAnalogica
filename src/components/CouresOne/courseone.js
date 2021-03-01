import React from 'react'
import styled from "styled-components"
import Swiper from "react-id-swiper"
import 'swiper/css/swiper.css'
import diplomainml from "../../images/image 3.png"
import dipcybsec from "../../images/image 8.png"
import one from "../../images/image 4.png"
import two from "../../images/image 5.png"
import three from "../../images/image 7.png"
import four from "../../images/image 6.png"
import {Link} from "gatsby"



const data = [
    {
        id: 1,
        img: diplomainml,
        h3: "Web Penetration Application",
        h6:"Web applications is the most used digital technology there is and with this",
        link: "#"
    },
    {
        id: 2,
        img: dipcybsec,
        h3: "Cloud Security Practitioner",
        h6:"Every organization is migrating to the cloud in order to save money, but",
        link: "#"
    },
    {
        id: 3,
        img: one ,
        h3: "Android Application Penetration Testing",
        h6:"We are always connected to our mobile phones, using lot’s of applications",
        link: "#"
    },
    {
        id: 4,
        img: two,
        h3: "Ethical Hacking1.0",
        h6:"Ethical hacking also known as penetration testing/ cyber security is a practice of",
        link: "#"
    },
    {
        id: 5,
        img: three,
        h3: "Diploma in Machine Learning",
        h6:"Web applications is the most used digital technology there is and with this",
        link: "#"
    },
    {
        id: 6,
        img: four,
        h3: "Diploma in Cloud Security",
        h6:"The course module is divided into two semester covering both practical and theoretical",
        link: "#"
    },

]


function courseone() {
    const params = {
        slidesPerView: 4,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
    
        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      };
    return (
        <Container>
                <Swiper {...params}>
                    {
                     data.map((d) =>(
                        <InnerContainer key={d.id}>
                        <img src={d.img} alt="" />
                        <h3>{d.h3}</h3>
                        <h6>{d.h6}</h6>
                        <LinkCourse to={d.link}>Read More</LinkCourse>
                    </InnerContainer>
                     )
               
    )
                    }
           
            
            </Swiper>
        </Container>
    )
}

export default courseone


const Container = styled.div`
width: 100%;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: center ;

   
`
const InnerContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 354px;
  height: 380px;
    
  
    
   

    >img{
        width: 354px;
        height: 220px;
        object-fit:contain;
    }
  >h3{
        text-align: center;
        font-family: "Roboto";
        font-size: 18px;
        

  }   
  >h6{
      margin-top: -20px;
    text-align: center;
    font-family: "Roboto";
    height: 63px;
  } 

  >Link{
      background: none;
      box-shadow: none;
      border: none;
     
  }
` 
const LinkCourse = styled(Link)`
  border-bottom: 1px solid #000000;
    margin-top: -40px;

    @media (max-width: 479px){
      margin-top:-60px;
    }

`
  