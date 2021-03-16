import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import Fade from 'react-reveal/Fade';

function WhatweDO() {
  return (
    <Container>
      <InnerConatiner>
        <h2 className="borderLeftRight">what we do</h2>
        <Fade left>        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
          cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras
          porta velit integer maecenas. 
        </h4>
        </Fade>
        <LinkTo className="pushUpBtn" to="#">Learn More</LinkTo>
      </InnerConatiner>
    </Container>
  )
}

export default WhatweDO

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  height:auto;
`

const InnerConatiner = styled.div`
  width: 50%;
  display: flex;
  height:auto;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 479px){
        width:90%;
      
    }

  /* h2 {
    font-size: 20px;
    font-weight: 600;
    font-family:"Maven Pro", sans-serif !important;
     
  } */

  h2{
    padding-top: 0px;
    color: var(--primaryColor);
     font-size:25px;
   
      font-weight: 600;
     transition: 1s ease-in-out;
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
  
  h4{
    font-size:2rem;
    line-height: 3.5rem;
    font-weight: 400;
    
    @media (max-width: 479px){
     
      font-size:18px;
      letter-spacing: 1.5px;
      line-height: 25px;
        }
        @media (max-width: 767px){
     
     font-size:18px;
     letter-spacing: 1.5px;
     line-height: 25px;
       }
       @media (max-width: 991px){
     
     font-size:18px;
     letter-spacing: 1.5px;
     line-height: 25px;
       }
  }

`
const LinkTo = styled(Link)`
  margin-top: 15px;
  background-color: white;
  color: var(--primaryColor);
  border: 1px solid var(--primaryColor);
  padding: 18px 24px;
  
  border-radius: 6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  text-decoration: none;
  

  &:hover {
    transition-duration: 0.45s;
    transition-timing-function: cubic-bezier(.165,.84,.44,1);
    background-color: var(--primaryColor);
  color: #fff;
}
   
`

