import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from "styled-components"

function author(props) {
    const {author} = props 
   const {author_image, name, descrption} = author
    const [{formats}] = author_image
    console.log(formats.small.url);
    return (
        <Wrapper>
            <div className="section">
                {/* <div className="star_rating">
                    <StarRating />x
                </div> */}
                <div className="author_image">
                    <img className="image" src={formats.small.url} alt={name} />
                    <h1>{name}</h1>
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

export default author

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
`
