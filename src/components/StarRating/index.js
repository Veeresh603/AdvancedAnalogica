import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from "styled-components"
 

function Star(props){
    const [rating, setRating] = React.useState(4.3)
    const {edit} = props
console.log(edit);
    const onStarClick = (nextValue, prevValue, name) => setRating(nextValue)
    return(
<Wrapper>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
          editing={edit}
        />
      </Wrapper>
    )
}


export default Star

const Wrapper = styled.div`
.dv-star-rating{
    font-size: 35px;
}
`