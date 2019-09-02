import React from 'react';
import Link from 'next/link';
import SkillCard from './SkillCard';

const SectionOne = () => (
  <div className="SectionOne">
    <div className="SectionOne-top">
      <h2>Skills</h2>
      <p> As a Full-stack engineer, I have strong skills in front-end, back-end, and devops. 
        I needed these skills because to be a great full-stack engineer you need to be able 
        to create a nice UI, but also be able to create endpoints for an API. I also recongized 
        that those two skills wouldn't be helpful if I can't deploy and everyone has accesss to it .
        That is why I gathered a plethora amount of knowledge on the cloud to be able to deploy, choose the best 
        solution, and troubleshoot any problem that can occur.
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