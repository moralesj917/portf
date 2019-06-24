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
    <Tools
      firstIcon="../../static/images/react-pic.png" 
      firstTitle="React"
      firstSummary="Using React a fast and reactive framework to make the application seemless and as well fast was a simple decision."

      secondIcon="../../static/images/firebase.png"
      secondTitle="Firebase"
      secondSummary="Firebase has many uses and I used in my application to have a user sign in through there google login and 
                    as well as use Firebase's database to manage data."

      thirdIcon="../../static/images/enzyme.png"
      thirdTitle="Airbnb Enzyme with Jest"
      thirdSummary="Being fimilar with a tesing framework such as Jest was the perfect pair with Airbnb Enzyme to make automated 
                    testing and test driven development easier."
    />
    <hr className="finishing-section"/>
  </div>
);

export default SectionTwo;