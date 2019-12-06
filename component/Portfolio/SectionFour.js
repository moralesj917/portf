import React from "react";
import ThumbNail from "./WebApps/ThumbNail";
import TechCard from "./WebApps/TechCard";

const SectionFour = () => (
  <div className="Port-Section">
    <ThumbNail
      title="Address Express API checker"
      summary="To change my skills of using external API's that have use cases. 
      I wanted a piece of middleware that I could use in a lot of my application.
       I use methods such as Mocha, Chai, Docker, Docker-compose, MySQL, Node, and Express. "
      appLink="https://github.com/jmoral1943/address-express-api"
      imgFilePath="../../static/images/address.jpeg"
      githubRepo="https://github.com/jmoral1943/address-express-api"
    />
    <div className="mobileporf__toolsHeading">
      <h2>Tools used</h2>
    </div>
    <TechCard
      icons={[
        "../../static/images/chai.png",
        "../../static/images/mysql.svg",
        "../../static/images/docker.png"
      ]}
      titles={["Chai.js", "MySQL", "Docker"]}
    />
    <hr className="finishing-section" />
  </div>
);

export default SectionFour;
