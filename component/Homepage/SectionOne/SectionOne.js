import React from 'react';
import Link from 'next/link';
import SkillCard from './SkillCard';

const SectionOne = () => (
  <div className="SectionOne">
    <div className="SectionOne-top">
      <h2>Skills</h2>
      <p> Front-end, Back-end, and Devops. As a full stack engineer, I needed to be as well-rounded to be
        able to create and make the things that sparked my interest.
      </p>
      <Link href="../../static/resume.pdf">
        <a className="mobile__buttons">Resume</a>
      </Link>
    </div>
    <div className="SectionOne-bottom">
      <div>

      </div>
      <div>
        
      </div>
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