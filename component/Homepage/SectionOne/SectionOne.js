import React from 'react';
import HomePageCard from './HomePage-Card';
import Link from 'next/link';

const SectionOne = () => (
  <div className="SectionOne ">
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
      <HomePageCard 
        title="Front-end" 
        paragraph="I learned HTML, CSS, and vanilla JavaScript. To make my web pages interactive. But I added some JS frameworks like React.js."
      />

      <HomePageCard 
        title="Back-end"
        paragraph="I know to use Node.js as well Express.js to make server including using Golang to combine with React to make a super fast application that is well made."
      />

      <HomePageCard
        title="GraphQL & SQL"
        paragraph="Mostly everything is on mobile most of these days, that is why I made it my goal to understand a new technique of getting and transmitting my data."
      />
    </div>
  </div>
);

export default SectionOne;