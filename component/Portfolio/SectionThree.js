import React from 'react';
import ThumbNail from './WebApps/ThumbNail';
import Tools from './WebApps/Tools';

const SectionThree = () => (
  <div >
    <ThumbNail
      title="Portfolio Website"
      summary="As an aspiring Full-Stack Developer in todays market that is over satured in engineers. I had to find a way to 
      showcase my skills as a Software Engineer and as well as implement the techinical knowledge I acquired for praticial use."
      appLink="www.jonmoral.com"
      imgFilePath="../../static/images/chat-app.png"
      githubRepo="https://github.com/moralesj917/Chat-app"
    />
    <Tools
      firstIcon="../../static/images/node.png" 
      firstTitle="Node.js"
      firstSummary="Using Node.js as my backend language and let Socket.io do all the heavy lifting with the help of Express.js"

      secondIcon="../../static/images/socket.jpg"
      secondTitle="Socket.io"
      secondSummary="Socket.io is a real time engine that send a message to every client within a specfic chat room like any real-time
                      chat application."

      thirdIcon="../../static/images/express.svg"
      thirdTitle="Express.js"
      thirdSummary="Express was just used to create an application server that socket.io listened for activity."
    />
    <hr className="finishing-section"/>
  </div>
);

export default SectionThree;