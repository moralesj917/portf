import React from 'react';
import SectionThreeCard from './SectionThreeCard';

const SectionThree = () => (
  <div className="SectionThree">
    <div className="SectionThree__heading">
      <h2>Experience</h2>
    </div>

    <div className="SectionThree-bottom">
      <SectionThreeCard 
        job="Teacher Assistant"
        text="Road to Hire is a Non-profit Bootcamp created the by CEO of Red Ventures Rick Elias."
        company="Road to Hire"
        date="June 17, 2019 ~ Present"
      />
      <SectionThreeCard 
        job="Software Engineer Appretince"
        text="Road to Hire is a Non-profit Bootcamp created the by CEO of Red Ventures Rick Elias."
        company="Road to Hire"
        date="June 17, 2019 ~ Present"
      />
     <SectionThreeCard 
        job="Jr. Software Engineer"
        text="SSI Schaefer is a international company that leads in manufacturing logistics."
        company="SSI Schaefer"
        date="August 20, 2018 ~ June 15, 2019"
      />
      
      <SectionThreeCard
        job="Student"
        text="CPCC is in Charlotte, NC where I got IT training and as well as cerfications."
        company="CPCC"
        date="August 20, 2018 ~ June 15, 2019"
      />
    </div>
  </div>
);

export default SectionThree;