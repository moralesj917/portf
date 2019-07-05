import React from 'react';
import Link from 'next/link';

const SectionTwo = () => (
  <div className="SectionTwo">
    <div className="SectionTwo-top">
      <h2>Projects Gallery</h2>
      <p>I have worked on various projects to help expand my understanding of the tools and languages 
        that I have learned. I have projects from node.js to projects involving React. As well as involving 
        the various amount of tools to boost the performance as well as the effectiveness of my applications.
      </p>
      <Link href="../../static/resume.pdf">
        <a className="mobile__buttons">Portfolio</a>
      </Link>
    </div>
    <div className="SectionTwo-bottom">
      <img className="SectionTwo-bottom-image-one" src="../../../static/images/expensify-project.png"/>
      <img className="SectionTwo-bottom-image-two" src="../../../static/images/node-chat-app.png"/>
      <img className="SectionTwo-bottom-image-three" src="../../../static/images/weather-app.png"/>
    </div>
  </div>
);

export default SectionTwo;