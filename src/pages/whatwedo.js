import React from 'react'
import styled from "styled-components"
import Banner2 from '../components/Banner2'
import ConsultingGrid from '../components/ConsultingGrid'
import GetInTouch from '../components/GetInTouch'
import SoftwareDevelopmemtGrid from '../components/SoftwareDevelopmemtGrid'
import TrainingOnEmergingTechnologyGrid from '../components/TrainingOnEmergingTechnologyGrid'
import { useStaticQuery, graphql } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';



const list = [
  {
    id: 1,
    title: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "Internet of things",
  },
  {
    id: 3,
    title: "Cyber Security & services",
  },
]

function Whatwedo() {
  const data = useStaticQuery(graphql`
  query {
    consulting:file(relativePath: { eq: "books.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
   
    
      software:file(relativePath: { eq: "beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    
  
      training:file(relativePath: { eq: "pexels.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
 
  
`)
    return (
        <Container>
           <Banner2 title="what we do" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas. Pellentesque scelerisque at amet tempor donec in tincidunt. Vulputate platea semper lacinia aliquam egestas."  /> 
           <Wrapper>
      <div className="anchor_tab">
         <div className="anchor_tab_section">
             <div>
             <button className="button" onClick={() => scrollTo('#consulting')}>consulting</button>
             </div>
             <div>
             <button  className="button"  onClick={() => scrollTo('#software')}>software development</button>
             </div> <div>
             <button className="button" onClick={() => scrollTo('#training')}>training</button>
             {/* <Link to="training" className="link" >training</Link> */}
             </div>
          

         </div>
      </div>
    </Wrapper>
    <ConsultingGrid  id="consulting" title="consulting" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas." img={data.consulting.childImageSharp.fluid} list={list} />
    
          
           <SoftwareDevelopmemtGrid id="software" title="software development" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas." img={data.software.childImageSharp.fluid} list={list} />
           <TrainingOnEmergingTechnologyGrid id='training' title="training on emerging technologies" classroom="classroom" corporate="corporate & online" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in
            cras porta velit integer maecenas." img={data.training.childImageSharp.fluid}  list={list}/>
           <GetInTouch />
        </Container>
    )
}

export default Whatwedo
const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  height: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  > h1 {
    margin-top: 50px;
    border-bottom: 1px solid #ff002b;
    @media (max-width: 479px) {
      text-align: center;
      font-size: 17px;
    }
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top:-30px;
  z-index:1;
  padding-bottom: 150px;
  .anchor_tab {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 70px;
    grid-column-gap: 5px;
    grid-row-gap: 0px;
  }
  .anchor_tab_section{
      grid-area:1/7/2/12;
      background-color: var(--primaryColor);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      @media (max-width:991px){
      grid-area: 1/5/2/12;

  }
  @media (max-width:767px){
      grid-area: 1/2/2/12;

  }
  @media (max-width:479px){
    grid-area: 1/1/2/12;
  }
  }
  .button{
      font-size:20px;
      color:white;
      background: none;
      border: none;
      cursor: pointer;
      @media (max-width:767px){
        font-size:18px;

  }
  @media (max-width:767px){
        font-size:15px;

  }
  }
`