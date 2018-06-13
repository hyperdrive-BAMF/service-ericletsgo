import React from 'react';

import Logo from './logo.jsx';
import Tags from './tags.jsx';

const GameDescription = props => (
  <div id="reviews_container">
    <Logo logoURL={props.logoURL} /><br />
    <dl>
      <dt className="game_description">
        {props.description}
      </dt><br />
      <dt className="has_pointer container tooltip">
        <div className="subtitle">Recent Reviews:</div>
        <div className="sub-flex">{props.recentReviews}</div>
        <span className="tooltiptext">(num)% of the (num reviews) user reviews in the last 30 days are (rating)</span>
      </dt>
      <dt className="has_pointer container tooltip">
        <div className="subtitle">All Reviews:</div>
        <div className="sub-flex links">{props.allReviews}</div>
        <span className="tooltiptext">(num)% of the (num reviews) user reviews are (rating)</span>
      </dt><br />
      <dt className="container">
        <div className="subtitle">Release Date:</div>
        <div className="sub-flex">{props.releaseDate}</div>
      </dt><br />
      <dt className="container">
        <div className="subtitle">Developer:</div>
        <div className="sub-flex links has_pointer">{props.developer}</div>
      </dt>
      <dt className="container">
        <div className="subtitle">Publisher:</div>
        <div className="sub-flex links has_pointer">{props.publisher}</div>
      </dt><br />
      <dt className="tag-subtitle container">
        <span>Popular user-defined tags for this product:</span>
      </dt>
      <div className="container">
        {props.tags.map((tag, i) => <Tags key={i} tag={tag} />)}
        <a href="" className="tags">+</a>
      </div>
    </dl>
  </div>
);

export default GameDescription;
