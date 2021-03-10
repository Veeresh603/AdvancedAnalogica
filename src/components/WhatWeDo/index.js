import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

function WhatweDO() {
  return (
    <Container>
      <InnerConatiner>
        <h2>what we do</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
          cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras
          porta velit integer maecenas. Pellentesque scelerisque at amet tempor
          donec in tincidunt. Vulputate platea semper lacinia aliquam egestas.
        </p>
        <LinkTo className="pushUpBtn" to="#">Learn More</LinkTo>
      </InnerConatiner>
    </Container>
  )
}

export default WhatweDO

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const InnerConatiner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  @media (max-width: 479px){
        width:80%;
      
    }

  h2 {
    font-size: 20px;
    font-weight: 800;
     
  }

  p{
    padding-top: 0px;
      font-family: "Roboto";
      font-size:20px;
      font-weight: 300 !important;
  }

`
const LinkTo = styled(Link)`
  margin-top: 15px;
  
  padding: 12px 24px;
  background-color: #fff;
  color: #000000;
  border-radius: 6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  text-decoration: none;
  border: 1px solid #000000;
&:hover {
  transform: translate3d(0px,-1px,0px);
  background-color: #fff;
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}
   
`

