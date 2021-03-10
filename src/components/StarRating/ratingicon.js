import React from 'react'
import styled from 'styled-components';
import StarIcon from "./staricon";

function RatingIcon(props) {
    const {
      index,
      rating,
      hoverRating,
      onMouseEnter,
      onMouseLeave,
      onSaveRating,
    } = props;  
    
    const fill = React.useMemo(() => {
      if (hoverRating >= index) {
        return '#f441a5';
      } else if (!hoverRating && rating >= index) {
        return '#f441a5';
      }
      return 'none';
    }, [rating, hoverRating, index]);  
    return (
        <Container 
          className="cursor-pointer"
          onMouseEnter={() => onMouseEnter(index)} 
          onMouseLeave={() => onMouseLeave()} 
          onClick={() => onSaveRating(index)}>
          <StarIcon fill={fill} />
        </Container>
    )
  }

  const Container = styled.div`
         display: flex;
        flex-direction: row;
        cursor: pointer;
        width:30px;
        
       

  `

  export default RatingIcon