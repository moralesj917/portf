import React from 'react';
import ThumbNail from './WebApps/ThumbNail';
import Tools from './WebApps/Tools';

const SectionOne = () => (
  <div >
    <ThumbNail
      title="Portfolio Website"
      summary="As an aspiring Full-Stack Developer in todays market that is over satured in engineers. I had to find a way to 
      showcase my skills as a Software Engineer and as well as implement the techinical knowledge I acquired for praticial use."
      appLink="www.jonmoral.com"
      imgFilePath="../../static/images/portfolio-website.png"
      githubRepo="https://github.com/moralesj917/Portf"
    />
    <Tools
      firstIcon="../../static/images/react-pic.png" 
      firstTitle="React"
      firstSummary="I wanted to showcase my best skill and techonlogy that I enjoy working with so much. I used React with "

      secondIcon="../../static/images/next.png"
      secondTitle="Next.js"
      secondSummary="With React and Next.js you can a faster website that will use CSR(Client Side Rendering) and SSR(Server Side 
        Rendering)."

      thirdIcon="../../static/images/now.png"
      thirdTitle="Zeit"
      thirdSummary="With Next.js you can use Zeit which has now which is a serverless tool that pairs with Next.js greatly."
    />
    <hr className="finishing-section"/>
  </div>
);

export default SectionOne;