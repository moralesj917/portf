import React from 'react';
import HomePageCard from './HomePage-Card';

const SectionOne = () => (
  <div className="SectionOne">
    <div className="SectionOne-top">
      <h2>Skills</h2>
      <p>As full stack engineer I wanted to get a well rounded education. So i can build everything top to bottom. 
        I really enjoy the whole software process from constipation to production.
      </p>
    </div>
    <div className="SectionOne-bottom">
      <HomePageCard 
        title="Front-end" 
        paragraph="I learned HTML , CSS, and vanilla JavaScript. To make  my web pages interactive. But I added some JS frameworks like React.js."
      />

      <HomePageCard 
        title="Back-end"
        paragraph="I know to use Node.js as well Express.js to make server including using Golang to combine with React to make super fast application that are well made."
      />

      <HomePageCard
        title="GraphQL"
        paragraph="Mostly everything is on mobile most of these days, that is why I made it my goal to understand a new techinque of getting and transmitting my data."
      />
    </div>
  </div>
);

export default SectionOne;