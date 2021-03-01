import React from "react"
import styled from "styled-components"
import {BsToggleOn} from "react-icons/bs"
import {FaRobot} from "react-icons/fa"
import {FaCertificate} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <BsToggleOn className="iconStyles" />,
    heading: "DATA SCIENCE CONSULTING",
    descrption:
      " Your data has a story to tell. Have you been storing all your data? Let your data help you make the right decisions. We help enterprise to evolve into a data driven enterprise. With the right techniques of ML and AI, your data will lead your company's growth.",
  },
  {
    id: 2,
    icon: <FaRobot className="iconStyles" />,
    heading: "AI PRODUCT DEVELOPMENT",
    descrption:
      "If the source of your data is standardized, automated real time predictive analytics will add a second wing to your stake holders. We can help you map the entire flow from collection of data to final predictive model.",
  },
  {
    id: 3,
    icon: <FaCertificate className="iconStyles" />,
    heading: "TRAINING AND CERTIFICATION ",
    descrption:
      " A well trained work force is the greatest asset for a company. We train our students with real world projects so that our clients are well placed to maximize on the opportunities in the AI dominated economy.",
  },
]

function datadriven() {
  return (
    <Container>
      {data.map(d => (
        <InnerContainer key={d.id}>
            {d.icon}
            <Heading>
              <h2>{d.heading}</h2>
            </Heading>
            <Descrption>
              <p>{d.descrption}</p>
            </Descrption>
        </InnerContainer>
      ))}
    </Container>
  )
}

export default datadriven

const Container = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .iconStyles{
    width:80px;
    height: 80px;
  }
`

const InnerContainer = styled.div`
  width: 360px;
  height: 330px;
  display: flex;
  flex-wrap: nowrap;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`

const Heading = styled.div`
  width:100%;
  color: #0011ff;
   
  height: 36px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Descrption = styled.div`
   width: 100%;
   height: 50%;
   display: flex;
   flex-wrap: nowrap;
    margin-top: -25px;
    align-items: center;
    flex-direction:row;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: flex-start;

    p{
      height: 118px;
      font-size: 13px;
      text-align: center;
      font-family: "Roboto";
      font-weight: 500;
      line-height: 2;
    }

`