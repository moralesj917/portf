import React from 'react';
import ThumbNail from './WebApps/ThumbNail';
import TechCard from './WebApps/TechCard';

const SectionThree = () => (
  <div >
    <ThumbNail
      title="Socket.io Chat app"
      summary="As I learning Node.js I wanted to make a fullstack web applications with real world applications. Using socket.io 
      a real time engine that allows me to have the server listen for any client that connects to a certain chat room and send it to all 
      connected clients like any real-time chat application would."
      appLink="https://morales-node-chat-app.herokuapp.com/"
      imgFilePath="../../static/images/chat-app.png"
      githubRepo="https://github.com/moralesj917/Chat-app"
    />
    <TechCard
      icons={["../../static/images/node.png", "../../static/images/socketio.png", "../../static/images/express.svg"]}
      titles={["Node.js", "Socket.io", "Express.js"]}
    />
    <hr className="finishing-section"/>
  </div>
);

export default SectionThree;