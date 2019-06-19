import React from 'react';

const SectionTwo = () => (
  <div className="SectionTwo">
    <div className="SectionTwo-top">
      <h2>Projects Gallery</h2>
      <p> I have worked on various projects to help expand my understanding of the tools and languages that I have learned.
        I have projects from node.js to projects involving React. And as well as involving various amount of tools 
        to boost the performance as well as effectiviness of my applications.
      </p>
    </div>
    <div className="SectionTwo-bottom">
      <img className="SectionTwo-bottom-image-one" src="../../../static/images/expensify-project.png"/>
      <img className="SectionTwo-bottom-image-two" src="../../../static/images/node-chat-app.png"/>
      <img className="SectionTwo-bottom-image-three" src="../../../static/images/weather-app.png"/>
    </div>
  </div>
);

export default SectionTwo;