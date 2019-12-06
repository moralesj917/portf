import React from "react";
import ThumbNail from "./WebApps/ThumbNail";
import TechCard from "./WebApps/TechCard";

const SectionThree = () => (
  <div className="Port-Section">
    <ThumbNail
      title="Fix Fity Hired UP"
      summary="As my amazing team and I part took in a fix-fity hackathon to attack the problem of upwards mobility. 
      We chose to make an application that attacked how people would get jobs and get paid quicker than other means.
      This project uses Node and express to authenticate users and handle the backend processes."
      appLink="https://github.com/SkylerCStevens/Fix-Fifty-App"
      imgFilePath="../../static/images/hiredup.png"
      githubRepo="https://github.com/SkylerCStevens/Fix-Fifty-App"
    />
    <div className="mobileporf__toolsHeading">
      <h2>Tools used</h2>
    </div>
    <TechCard
      icons={[
        "../../static/images/node.png",
        "../../static/images/express.svg",
        "../../static/images/outh2.svg"
      ]}
      titles={["Node.js", "Socket.io", "Express.js"]}
    />
    <hr className="finishing-section" />
  </div>
);

export default SectionThree;
