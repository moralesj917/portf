import React from 'react';
import Link from 'next/link';
import SkillCard from './SkillCard';

const SectionOne = () => (
  <div className="SectionOne">
    <div className="SectionOne-top">
      <h2>Skills</h2>
      <p> Front-end, Back-end, and DevOps. As a Full-stack engineer, I needed to 
        be a well-rounded individual that has the ability and knowledge to be able 
        to create a nice UI but as well as be able to create endpoints for my API's. 
        Not to forget as well that with a world that is leaning on technology more and 
        more every day comes with the necessity to be able to deploy, choose the best 
        solution, and troubleshoots any problems that may occur.
      </p>
    </div>

    <SkillCard
      title="React"
      progress="90%"
      color="#61DBFB"
    />
    <SkillCard
      title="GoLang"
      progress="70%"
      color="#29BEB0"
    />
    <SkillCard
      title="AWS"
      progress="60%"
      color="#F79C34"
    />
    <SkillCard
      title="JavaScript"
      progress="90%"
      color="#F0DB4F"
    />
    <SkillCard
      title="Docker"
      progress="10%"
      color="#0db7ed"
    />
    <SkillCard
      title="MySql"
      progress="60%"
      color="#F29111"
    />
    <SkillCard
      title="HTML/CSS"
      progress="90%"
      color="#F16529"
    />
  </div>
);

export default SectionOne;