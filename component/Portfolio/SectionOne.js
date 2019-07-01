import React from 'react';
import ThumbNail from './WebApps/ThumbNail';
import TechCard from './WebApps/TechCard';

const SectionOne = () => (
  <div className="Port-SectionOne">
    <ThumbNail
      title="Portfolio Website"
      summary="As an aspiring Full-Stack Developer in todays market that is over satured in engineers. I had to find a way to 
      showcase my skills as a Software Engineer and as well as implement the techinical knowledge I acquired for praticial use."
      appLink="www.jonmoral.com"
      imgFilePath="../../static/images/portfolio-website.png"
      githubRepo="https://github.com/moralesj917/Portf"
    />
    <TechCard
      icons={["../../static/images/react-pic.png", "../../static/images/next.png", "../../static/images/now.png" ]}
      titles={["React", "Next.js", "Zeit / Now"]}
    />
    <hr className="finishing-section"/>
  </div>
);

export default SectionOne;