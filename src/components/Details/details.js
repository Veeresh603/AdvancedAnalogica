import React from 'react'
import styled from "styled-components"
import {Link} from "gatsby"
import Ai from "../../images/image 10.png"
import Cyb from "../../images/image 11.png"



function details() {
    return (
        <Container>
            <InnerContainer>
                <img src={Ai} alt="" />
                <h2>Analogica offers an in-depth certification course on Data Science, 
                    Machine learning and Artificial intelligence. This course is taught 
                    from scratch. The only pre-requisite is that the student must have 
                    the right educational background to achieve success.</h2>
                <h4>
                This course is designed to make you a machine learning engineer. However, 
                those who wish to train for data analytics and business analytics role
                 also will find this course extremely useful. The course enrollment is free
                  for the first 4 classes. Once the student is satisfied that the teaching 
                  style , scope of syllabus ans the technology used are adequate, student 
                  can officially sign-up for the course
                </h4>
                <LinkToThere to="#">Get me there</LinkToThere>
            </InnerContainer>
            <InnerContainer>
                <img src={Cyb} alt="" />
                <h2>Cyber security is the most in-demand skill for 2021-2022.
                     Cyber Attacks have increased by a whooping 400% since 2020 and 
                     the one skill the companies need is for Ethical Hackers and 
                     Cybersecurity Experts to keep their data safe.</h2>
                <h4>
                The world of information and cybersecurity seems to be changing 
                almost daily. The right cybersecurity resources can help you stay 
                informed. We have a page dedicated to Ethical Hacking. 
                </h4>
                <LinkToThere to="#">Get me there</LinkToThere>
            </InnerContainer>

        </Container>
    )
}

export default details

const Container = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;


`
const InnerContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 540px;
  height: 617.3px;
  padding-left: 40px;

  @media (max-width: 479px){
    padding-left: 15px;
    padding-right: 15px;
      width: 100%;

    }

  >img{
      width: 400px;
      height: 250px;
  }
  >h2{
      text-align: center;
      font-size: 19px;
      font-family: "Roboto";
      font-weight: 600;

      @media (max-width: 479px){
      
      text-align: center;
       font-size: 16px;
    }
  }
  >h4{
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
      color: #103E5D;
      font-family: "Roboto";

  }
`
const LinkToThere = styled(Link)`
      margin-top: 10px;
`