import React from 'react';

const GameDescription = (props) => (
  <div>
    <div id="logo">
      <img src={props.logoURL} />
    </div>
    <div class="description">
      {props.description}
    </div>
    <div class="reviews">
      Recent Reviews: {props.recentReviews}
    </div>
      All Reviews: {props.allReviews}
    <div class="reviews">
    </div>
    <div>
      Release Date: {props.releaseDate}
    </div>
    <div>
      Developer: {props.developer}
    </div>
    <div>
      Publisher: {props.publisher}
    </div>
    <div>
      <div>
        Popular user-defined tags for this product:
      </div>
      <div>
        {props.tags}
      </div>
    </div>
  </div>
)

export default GameDescription;
