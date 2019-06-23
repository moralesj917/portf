import React from 'react';

const TechCard = ({ icon, title, summary }) => (
  <div className="TechCard">
    <img src={icon} />
    <h3>{title}</h3>
    <p>{summary}</p>
  </div>
);

export default TechCard;