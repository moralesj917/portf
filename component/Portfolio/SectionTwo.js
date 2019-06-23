import React from 'react';
import ThumbNail from './WebApps/ThumbNail';
import Tools from './WebApps/Tools';

const SectionTwo = () => (
  <div >
    <ThumbNail
      title="Expensify App"
      summary="As an aspiring Full-Stack Developer in todays market that is over satured in engineers. I had to find a way to 
      showcase my skills as a Software Engineer and as well as implement the techinical knowledge I acquired for praticial use."
      appLink="https://morales-expensify.herokuapp.com/"
      imgFilePath="../../static/images/expensify.png"
      githubRepo="hhttps://github.com/moralesj917/Expensify-app"
    />
    <hr />
    <Tools
      firstIcon="../../static/images/react-pic.png" 
      firstTitle="React"
      firstSummary="I wanted to showcase my best skill and techonlogy that I enjoy working with so much. I used React with "

      secondIcon="../../static/images/firebase.png"
      secondTitle="Firebase"
      secondSummary="With React and Next.js you can a faster website that will use CSR(Client Side Rendering) and SSR(Server Side 
        Rendering)."

      thirdIcon="../../static/images/enzyme.png"
      thirdTitle="Airbnb Enzyme with Jest"
      thirdSummary="With Next.js you can use Zeit which has now which is a serverless tool that pairs with Next.js greatly."
    />
    <hr />
  </div>
);

export default SectionTwo;