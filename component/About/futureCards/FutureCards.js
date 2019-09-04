import React from "react";

const FutureCards = ({ title, imgFilePath }) => (
  <div className="FutureCards">
    <div className="FutureCards-left">
      <h2>{title}</h2>
    </div>

    <img src={imgFilePath} />
  </div>
);

export default FutureCards;
