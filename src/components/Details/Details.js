import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"


const Details = (props) => {
 
  return (
         <Wrapper>
                        
                        <div className="heading">
              <h1 className="borderLeftRight">{!props.title ? null : props.title}</h1>

              </div>
            <div className="section">
              
              <div className="section_child">
                    <Image className="details_image01" fluid={props.image1} alt="" />
                    <div className="text">
                      <h2>{props.title1}</h2>
                    </div>
              </div>
            
              <div className="section_child01">
                    <Image  className="details_image01" fluid={props.image2} alt="" />
                    <div className="text">
                    <h2>{props.title2}</h2>
                    </div>
              </div>
              <div className="section_child01">
                    <Image className="details_image01" fluid={props.image3} alt="" />
                    <div className="text">
                    <h2>{props.title3}</h2>
                    </div>
              </div>
            </div>
           
         </Wrapper>
  )
}

export default Details

const Wrapper = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  grid-auto-rows : auto !important;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:auto;

h1{
  width: auto;

    font-family: var(--family);
    font-weight: 600;
    color: var(--primaryColor);

    font-size: 25px;
    @media (max-width: 479px) {
      font-size: 20px;
      height: auto;
    }
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
.heading{
  grid-area: 1/2/2/11
}
  .section{
    grid-area: 2/2/3/11;

    width:100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: center;
    padding-bottom: 100px;
    justify-content: space-evenly;
       @media (max-width: 479px){
         flex-direction:column;
         flex-wrap: wrap;
       
       }
       @media (max-width: 767px){
        flex-wrap: wrap;

       }
       @media (max-width: 991px){
         flex-wrap: nowrap;
         justify-content: center;
       }
  }
  .details_image01{
    border-radius: 5px;
  }
  .section_child{
    display: flex;
    width: 400px;
    height:auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
       @media (max-width: 991px){
      padding-left: 10px;
      padding-bottom:20px;
      margin:0;
      height:auto;
      width:250px;

      
       }
      
       @media (max-width: 479px){
      padding-left: 0px;
      padding-bottom:20px;
      margin:0;
      height:auto;
      width:350px;
      height:auto;
       }
       
  }
  .section_child01{
    display: flex;
    width: 400px;
    height:auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left:10px;
    /* padding-left: 25px; */
 
       @media (max-width: 991px){
      padding-left: 10px;
      padding-bottom:20px;
      margin:0;
      height:auto;
      width:250px;
      
       }
       @media (max-width: 479px){
      padding-left: 0px;
      padding-bottom:20px;
      margin:0;
      width:350px;
      height:auto;
       }
      
       
       
  }
  .section_child:hover{
     h2{
       background-color: var(--primaryColor);
       color: white;
       transition: 0.5s ease-in-out;
     }
  }
  .section_child01:hover{
     h2{
       background-color: var(--primaryColor);
       color: white;
       transition: 0.5s ease-in-out;
     }
  }
  
  
  .text{
    width:100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-items: flex-end;
    justify-content: flex-end;
    margin-top:-40px;
    z-index:99;

    h2{
      text-align: center;
      font-size:18px;
      width: 300px;
      background-color: #f8f8f8;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.25);
      color:#111111;
      padding:10px;
      align-items: center;
      justify-content: center;
      align-self: center;
      border-radius: 5px;
      padding-left:30px;
      padding-right:30px;
      padding-top:20px;
      padding-bottom: 20px;
      font-family: var(--family);
      font-weight : 800 !important;
      
       @media (max-width: 991px){
        font-size:10px;
        width:150px;
       }
       @media (max-width: 479px){
        font-size:15px;
        width:250px;
       }
    }
  }
  
`
const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* z-index: 1; */
   // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: contain !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; // needed for IE9+ polyfill
  }
`







