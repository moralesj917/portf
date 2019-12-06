import React from "react";
import ThumbNail from "./WebApps/ThumbNail";
import TechCard from "./WebApps/TechCard";

const SectionTwo = () => (
  <div className="Port-Section">
    <ThumbNail
      title="ArcSurf Ecommerce Surf Shop"
      summary="This project is made with React, Node.js, MongoDb and JWT authentication. The styling for 
      this project is made with flex,SCSS, and BEM guidlines. This project for the products page 
      receives the information from the Node application running with a Axios get call."
      appLink="https://arcsurf.herokuapp.com/landing"
      imgFilePath="../../static/images/arcsurf.png"
      githubRepo="https://github.com/jmoral1943/ArcSurf-ecommerce"
    />
    <div className="mobileporf__toolsHeading">
      <h2>Tools used</h2>
    </div>
    <TechCard
      icons={[
        "../../static/images/react-pic.png",
        "../../static/images/redux.png",
        "../../static/images/mongodb.jpg",
        "../../static/images/jwt.png"
      ]}
      titles={["React.js", "Redux", "Mongo Db", "JWT"]}
    />
    <hr className="finishing-section" />
  </div>
);

export default SectionTwo;
