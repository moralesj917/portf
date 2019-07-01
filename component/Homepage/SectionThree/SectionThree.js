import React from 'react';
import SectionThreeCard from './SectionThreeCard';

const SectionThree = () => (
  <div className="SectionThree">
    <h2>Experience</h2>

    <div className="SectionThree-bottom">
      <SectionThreeCard 
        text="My experience began as a Software Engineer Appretince at SSI Schaefer a logistics company that uses 
        java. I only got experience as a QA Engineer. Working with JVM and high profile clients that were worth 
        millions of dollars."
        job="SSI Schaefer"
      />

      <SectionThreeCard 
        text="Acquiring and applying knowledge is one of my passions. Understanding the inner-workings of some of 
        the most advanced technology. Inevitably a stack that I personally thought would work best led me to build 
        and create my own projects. With my curiosity leading the way"
        job="Personal"
      />
      
      <SectionThreeCard 
        text="Since I was an apprentice for Schaefer they only paid for an Associates in IT with a concentration 
        with Software Engineering but I left before taking any Sofware Engineering courses. I did complete and 
        achieve my Pc pro and Network certification from Testout."
        job="CPCC"
      />
    </div>
  </div>
);

export default SectionThree;