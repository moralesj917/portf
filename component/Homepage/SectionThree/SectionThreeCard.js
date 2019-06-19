import React from 'react';

const SectionThreeCard = (props) => (
  <div className="SectionThreeCard">
    <p>{props.text}</p>
    <hr/>
    <h3>{props.job}</h3>
  </div>
);

export default SectionThreeCard;