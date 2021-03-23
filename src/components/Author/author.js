import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from "styled-components"
import StarRatingComponent from 'react-star-rating-component';
// import Img from "gatsby-image"


function Author(props) {
    const {author} = props 
   const {author_image, name, descrption} = author
   const [{url}] = author_image
 
//    console.log(url);
   
    const [rating, setRating] = React.useState(4.3)
    const onStarClick = (nextValue, prevValue, name) => setRating(nextValue)
    return (
        <Wrapper>
            <div className="section">
               
                <div className="author_image">
                    <img className="image"  src={url} alt={name}/>
                    <h1>{name}</h1>
                </div>
                <div className="star_rating">
                <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
          editing={false}
        />
                </div>
                <div className="about">
                    <h2>About the author</h2>
                    <ReactMarkdown>
                        {descrption}
                    </ReactMarkdown>
                </div>
            </div>
        </Wrapper>
    )
}

export default Author

const Wrapper = styled.div`
    width:100%;
    box-sizing: border-box;
    height:auto;
    display: flex;
  


    .section{
        width:90%;
        display: flex;
       flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height:100vh;
    }
    .author_image{
            display: flex;
           
            width:100%;
            align-items: center;

            h1{
                padding-left:10px;
                font-size:22px;
            }
    }
    .image{
        width:50px;
        height:50px;
        border-radius: 50px;
       
    }
    .about{
        display:flex;
        flex-direction:column;
        width:100%;
        height:auto;
        /* background-color: gray; */
        padding-left:0px;
    }
    .star_rating{
        margin-left: 58px;
        margin-top: -20px;
    }
    .dv-star-rating{
    font-size: 35px;
}
`
// const Image = styled(Img)`
// width:50px;
// height:50px;
// border-radius: 50px;
// `