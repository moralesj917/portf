import React from 'react';

const TechCard = ({ icons, titles }) => (
  <div className="TechCard">
    { icons.map((icon, title) => {
        return (
          <div className="TechCard-ind">
            <img  src={icon}  />
            <h3>{titles[title]}</h3>
          </div>
        );
      })
    }    
  </div>
);

export default TechCard;