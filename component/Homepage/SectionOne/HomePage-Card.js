import React from 'react';

const HomePageCard = (props) => (
  <div className="HomePageCard">
    <img src="../../../static/images/checkmark.svg" alt="Check mark"/>

    <div>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  </div>
);

export default HomePageCard;