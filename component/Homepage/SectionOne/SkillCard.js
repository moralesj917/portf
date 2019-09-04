import React from 'react';

const SkillCard = (props) => {
  const width= {
    width: props.progress,
    backgroundColor: props.color,
    height: '24px',
  }
  return (
    <div className="SkillCard">
      <h3 className="SkillCard__title">{props.title}</h3>
      <div className="SkillCard-progress">
        <div className="SkillCard-progress__graph" style={width}><p>{props.progress}</p></div>
      </div>
    </div>
  );
}

export default SkillCard;