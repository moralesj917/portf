import React from 'react';
import TechCard from './TechCard';

const Tools = ({ firstIcon, firstTitle, firstSummary, secondIcon, secondTitle, secondSummary, thirdIcon, thirdTitle, thirdSummary }) => {
  return (
    <div className="Tools">
      <TechCard icon={firstIcon} title={firstTitle} summary={firstSummary}/>
      <TechCard icon={secondIcon} title={secondTitle} summary={secondSummary}/>
      <TechCard icon={thirdIcon} title={thirdTitle} summary={thirdSummary}/>
    </div>
  );
};

export default Tools;