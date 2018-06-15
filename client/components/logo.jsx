import React from 'react';

const Logo = props => (
  <div className="container logo">
    <img className="image-logo" alt="Logo" src={props.logoURL} />
  </div>
);

export default Logo;
