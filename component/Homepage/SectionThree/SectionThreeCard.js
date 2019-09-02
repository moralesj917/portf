import React from 'react';

const SectionThreeCard = (props) => (
  <div className="SectionThreeCard">
    <div className="SectionThreeCard__job">
      <h3>{props.job}</h3>
      <p>{props.company}</p>
      <p>{props.date}</p>
    </div>
    <p className="SectionThreeCard__text">{props.text}</p>
    <p>Responbilites</p>
    <ul>
      {
        props.resp &&
        props.resp.map((resp) => {
          return <li
            key={resp}
          >{resp}</li>
        })
      }
    </ul>
  </div>
);

export default SectionThreeCard;