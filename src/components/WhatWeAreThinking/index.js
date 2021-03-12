import React from 'react'
import styled from "styled-components"
import box from "../../images/box.png"

function WhatWeAreThinking() {
    return (
        <Wrapper>
            <div className="section">
                <div className="section_right">
                    
                </div>
                <div className="section_left">
                <div className="upper_section">
                        <h2>what we're thinking</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. </p>
                    </div>
                    <div className="middle_section">
                        <div className="rectangle_box">

                        </div>
                        <div className="text">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        </div>
                    </div>
                    <div className="middle_section">
                        <div className="rectangle_box">

                        </div>
                        <div className="text">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
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
    align-items: center;
    justify-content: center;
    width:100%;
    height:auto;

    .section{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        align-self: flex-start;
        background: url("${box}");
        height: 2035px;
        margin-top:100px;
        padding: 50px;
        background-size: 100% 2035px;
        background-repeat: no-repeat;
    }
    .section_right{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width:30%;
    }
    .section_left{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width:70%;
    }
    .middle_section{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        width:100%;
        height:auto;

        .rectangle_box{
        width:100%;
        height:500px;
        background-color: #000000;
        
       
    }
    .text{
            width:100%;
            height: auto;
            display: flex;
            justify-content: flex-end
        }
        h4{
            margin-top:-30px;
            width:600px;
            padding:20px;
            background-color: #f8f8f8;
      box-shadow: 0px 2px 8px rgba(0,0,0,0.25);
      color:#111111;
        }
     
    }
    .middle_section:hover{
     h4{
       background-color: var(--primaryColor);
       color: white;
       transition: 1s ease-in-out;
     }
  }
   
`