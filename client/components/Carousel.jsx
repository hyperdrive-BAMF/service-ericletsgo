import React from 'react';

const CarouselSlot = props => (
  <div className="image-holder">
    <img alt="screenshot" src={props.image} onClick={() => props.changeImage(props.image)} />
  </div>
);

export default CarouselSlot;
