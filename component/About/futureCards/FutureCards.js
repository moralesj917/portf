import React from 'react';

const FutureCards = ({ title, summary, imgFilePath }) => (
  <div className="FutureCards">
    <div className="FutureCards-left">
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>

    <img src={imgFilePath} />
  </div>
);

export default FutureCards;