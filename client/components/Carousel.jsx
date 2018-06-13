import React from 'react';

const CarouselSlot = (props) => {
  return(
    <div className="image-holder">
      <img src={props.image} onClick={() => props.changeImage(props.image)} />
    </div>
  )
}

export default CarouselSlot;
