import React from "react";
import SectionThreeCard from "./SectionThreeCard";

const SectionThree = () => (
  <div className="SectionThree">
    <div className="SectionThree__heading">
      <h2>Experience</h2>
    </div>

    <div className="SectionThree-bottom">
      <SectionThreeCard
        job="Teacher Assistant"
        text="Road to Hire is a Non-profit Bootcamp created by CEO of Red Ventures Rick Elias."
        company="Road to Hire"
        date="June 17, 2019 ~ Present"
        resp={[
          "Teach lessons on HTML, CSS, JS, Jquery, and React",
          "Help individual students",
          "Help organize events"
        ]}
      />
      <SectionThreeCard
        job="Software Engineer Appretince"
        text="Road to Hire is a Non-profit Bootcamp created the by CEO of Red Ventures Rick Elias."
        company="Road to Hire"
        date="June 17, 2019 ~ Present"
        resp={[
          "Learn about the lastest techonologies",
          "Develop my professional skills",
          "Create software projects"
        ]}
      />
      <SectionThreeCard
        job="Jr. Software Engineer"
        text="SSI Schaefer is a international company that leads in manufacturing logistics."
        company="SSI Schaefer"
        date="August 20, 2018 ~ June 15, 2019"
        resp={[
          "QA tested the software",
          "Help mediate between developers and the customer",
          "Develop management application"
        ]}
      />
    </div>
  </div>
);

export default SectionThree;
