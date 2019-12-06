import React from "react";
import ThumbNail from "./WebApps/ThumbNail";
import TechCard from "./WebApps/TechCard";

const SectionOne = () => (
  <div className="Port-Section">
    <ThumbNail
      title="Gateway Project"
      summary="To get into Road to Hire you would have to pass the Gateway process. The challenge to pass through the Gateway program was to create a website on a country. I choose Iceland 
      . It is made with HTML, CSS, and JS"
      appLink="https://jmoral1943.github.io/RV-project/index.html"
      imgFilePath="../../static/images/gateway.png"
      githubRepo="https://github.com/jmoral1943/RV-project"
    />
    <div className="mobileporf__toolsHeading">
      <h2>Tools used</h2>
    </div>
    <TechCard
      icons={[
        "../../static/images/html.png",
        "../../static/images/css.svg",
        "../../static/images/javascript.svg"
      ]}
      titles={["HTML", "CSS", "JavaScript"]}
    />
    <hr className="finishing-section" />
  </div>
);

export default SectionOne;
