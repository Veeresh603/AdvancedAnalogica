import React from "react"
import styled from "styled-components"
import box from "../../images/box.png"

function WhatWeAreThinking() {
  return (
    <Wrapper>
      <div className="section">
        <div className="section_right"></div>
        <div className="section_left">
          <div className="upper_section">
            <h2>what we're thinking</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim
              in cursus nec nunc diam mi id odio. Amet morbi amet velit ut.{" "}
            </p>
          </div>
          <div className="middle_section">
            <div className="rectangle_box"></div>
            <div className="text">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
          </div>
          <div className="middle_section">
            <div className="rectangle_box"></div>
            <div className="text">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
          </div>
          <div className="bottom_section">
            <div className="bottom_reactangle">
              <h2>empowering constituents</h2>
              <div className="bottom_text">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  enim in cursus nec nunc diam mi id odio. Amet morbi amet velit
                  ut.{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default WhatWeAreThinking

const Wrapper = styled.div`
    display: flex;
    box-sizing: border-box;
   

    width:100%;
    height:2000px;
    @media (max-width: 479px){
        height: auto;
}
    .section{
        width: 100%;
        display: flex;
        flex-direction: row;
        
        justify-content: flex-end;
        background: url("${box}");
        height: 2000px;
        margin-top:100px;
        background-size: 100% 1635px;
        background-repeat: no-repeat;
        @media (max-width: 479px){
        height: auto;
        background-size: 100% 1500px;
        flex-wrap:wrap;
}

    }
   
    .section_right{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width:30%;
        @media (max-width: 479px){
        width:0%;
    }
    @media (max-width: 767px){
        width:0%;
    }
    }
  
    .section_left{
        display: flex;
        align-self: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width:70%;
        @media (max-width: 479px){
        width:100%;
        justify-content: center;
        align-items: center;
        align-self: center;
    }
    @media (max-width: 767px){
        width:100%;
    }
    }
    .upper_section{
        padding: 50px 50px 0 50px;
@media (max-width: 479px){
        /* padding: 50px 0px; */
        justify-content: center;
        align-items: center;
        align-self: center;
    }
    @media (max-width: 767px){
        margin-top: 50px;
        justify-content: center;
        align-items: center;
        align-self: center;
    }
        h2{
            color:var(--primaryColor);
            font-size: 20px;
            font-weight: 600;
        }

    }
    .middle_section{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        width:100%;
        height:auto;
        padding: 0 50px;
        @media (max-width: 479px){
        padding: 0px;
      
    }
        @media (max-width: 767px){
        }
        h4{

            margin-top:-30px;
            width:600px;
            padding:20px;
            background-color: #f8f8f8;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.25);
      color:#111111;
      border-radius: 5px;
      @media (max-width: 479px){
            width:auto;
            height:auto;
    }
    @media (max-width: 767px){
            width:400px;
            height:auto;
    }
        }

    }

   
    .rectangle_box{
        width:100%;
        height:500px;
        background-color: #000000;
        border-radius: 5px;
        @media (max-width: 479px){
            width:90%;
        height: 300px;
    }
    @media (max-width: 767px){
            width:100%;
        height: 400px;
    }
       
    }
    .text{
            width:100%;
            height: auto;
            display: flex;
            justify-content: flex-end;
            @media (max-width: 479px){
            width:90%;
    }
        }
    .middle_section:hover{
     h4{
       background-color: var(--primaryColor);
       color: white;
       transition: 1s ease-in-out;
     }
  }
  .bottom_section{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    width:100%;
    height:500px;


    .bottom_reactangle{
        display: flex;
        width:80%;
        flex-direction: column;
        border-radius: 5px;
        height: 249.73px;
        background-color: #000000;
        justify-content: center;
        padding:50px;
        @media (max-width: 479px){
          
          padding: 10px;
      }
    }
    h4{
        color: #f8f8f8;
    }
    h2{
        color: var(--primaryColor);

    
  }
  }
   
`
