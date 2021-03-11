import React from 'react'
import styled from 'styled-components'

function TechnologyStack() {

    const data = [
        {
            id:1,
            url: "https://www.slalom.com/sites/default/files/2019-12/platform-aws-up.svg"
        },
        {
            id:2,
            url: "https://www.slalom.com/sites/default/files/2019-12/platform-google-cloud-up.svg"
        },{
            id:3,
            url: "https://www.slalom.com/sites/default/files/2019-12/platform-microsoft-up.svg"
        },{
            id:4,
            url: "https://www.slalom.com/sites/default/files/2019-12/platform-salesforce-up.svg"
        },{
            id:5,
            url: "https://www.slalom.com/sites/default/files/2020-12/platform-snowflake-140x70.svg"
        },{
            id:6,
            url: "https://www.slalom.com/sites/default/files/2019-12/platform-tableau-up.svg"
        }

    ]
    return (
        <Wrapper>
            <div className="section">
            <div className="text">
                    <h2 className="borderLeftRight">technology stack</h2>

                    </div>
                <div className="section_items">
                   
                    <div className="boxes">
                    {data.map(d => 
                         <div className="small_boxes" key={d.id}>
                            <img src={d.url} alt="" />
                         </div>
                    )}
                    </div>
                   
                    <div className="small_boxes">

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default TechnologyStack


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width:100%;
  height:auto;

  .section{
      width:70%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      height:auto;

      @media (max-width:991px){
          width:90%;
      }
  }

  .text{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width:100%;
  }
  .section_items{
    display: flex;
    flex-direction: column;
    width:100%;
    height:auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

.boxes{
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
  .small_boxes{
     width:13%;
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  h2{
      font-size:20px;
      font-family: var(--family);
    color: var(--primaryColor);
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