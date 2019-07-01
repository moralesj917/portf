import React from 'react';
import ThumbNail from './WebApps/ThumbNail';
import TechCard from './WebApps/TechCard';

const SectionTwo = () => (
  <div >
    <ThumbNail
      title="Expensify App"
      summary="One of the toughest applications that I have made used React.js with Redux. Pushing the limit of the knowledge I 
      have about React. Using Google's Firebase as my applications database. While creating over 60 automated test cases, with Jest 
      and Airbnb's Enzyme to take snapshots as well as giving the confidence to update the application and ensure that I didn't break any 
      part of my application."
      appLink="https://morales-expensify.herokuapp.com/"
      imgFilePath="../../static/images/expensify.png"
      githubRepo="hhttps://github.com/moralesj917/Expensify-app"
    />
    <TechCard
      icons={["../../static/images/react-pic.png", "../../static/images/redux.png", "../../static/images/enzyme.png", 
      "../../static/images/firebase.png"]}
      titles={["React.js", "Redux", "Airbnb Enzyme with Jest", "Firebase"]}
    />
    <hr className="finishing-section"/>
  </div>
);

export default SectionTwo;