import React from 'react';

import Logo from './logo.jsx';
import Tags from './tags.jsx';

const GameDescription = (props) => (
  <div id="reviews_container">
    <Logo logoURL={props.logoURL} />
    <dl>
      <dt className="game_description">
        {props.description}
      </dt><br />
      <dt className="reviews container">
        <div className="subtitle">Recent Reviews:</div>
        <div className="sub-flex">{props.recentReviews}</div>
      </dt>
      <dt className="reviews container">
        <div className="subtitle">All Reviews:</div>
        <div className="sub-flex">{props.allReviews}</div>
      </dt><br />
      <dt className="container">
        <div className="subtitle">Release Date:</div>
        <div className="sub-flex">{props.releaseDate}</div>
      </dt><br />
      <dt className="container">
        <div className="subtitle">Developer:</div>
        <div className="sub-flex">{props.developer}</div>
      </dt>
      <dt className="container">
        <div className="subtitle">Publisher:</div>
        <div className="sub-flex">{props.publisher}</div>
      </dt><br />
      <dt className="tag-subtitle">
        <span>Popular user-defined tags for this product:</span>
      </dt>
      {props.tags.map((tag) => <Tags tag={tag}/>)}
    </dl>
  </div>
)

export default GameDescription;
