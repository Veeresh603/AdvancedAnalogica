import React from 'react'
import styled from "styled-components"
import {Link} from "gatsby"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"


function social() {
    return (
        <Container>
            <h1>Stay Connected with us</h1>
             <SocialIcons>
                 <LinkedSocial to="https://www.facebook.com/AnalogicaOnline"><FaFacebookF className="icons" /></LinkedSocial>
                 <LinkedSocial to="https://twitter.com/analogicaXpress"><FaTwitter  className="icons" /></LinkedSocial>
                 <LinkedSocial to="https://www.instagram.com/analogica.in/"><FaInstagram  className="icons" /></LinkedSocial>
                 <LinkedSocial to="https://www.youtube.com/channel/UCUgrgngvQuje0Man5XsPXpQ/videos"><FaYoutube className="icons" /></LinkedSocial>
                 <LinkedSocial to="https://www.linkedin.com/company/analogica-software-dev-pvt-ltd/?viewAsMember=true"><FaLinkedinIn  className="icons" /></LinkedSocial>

             </SocialIcons>
        </Container>
    )
}

export default social

const Container = styled.div`
   margin-top: 70px;
   width: 100%;
   height: auto;
   background-color: #000000;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   >h1{
        color: white;
        font-family: "Roboto"
   }
`
const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
    height: 150px;
    
`
const LinkedSocial = styled(Link) `
      height: 80px;
      
      .icons{
          width: 40px;
          height: 40px;
      }

      &:hover{
          background-color: transparent;
          border: none;
      }
`