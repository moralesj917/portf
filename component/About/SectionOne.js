import React from "react";

const SectionOne = () => (
  <div className="About-SectionOne">
    <div className="About-SectionOne-left">
      <img src="../../static/images/profile.png"></img>
      <p>Jonathan Morales</p>
      <h2>Software Engineer</h2>
      <h3>About Me</h3>
      <p>
        I'm energetic Software engineer who loves to solve problems. I enjoy
        working in a team environment because it gives me access to observe how
        others would solve a problem. I love challenging myself to learn new
        skills as well as mastering the skills I already have.
      </p>
      <div className="c-contact__buttons">
        <a href="https://github.com/jmoral1943" className="c-about__contact">Go to my Github</a>
        <a href="mailto:jmoral1943@gmail.com" className="c-about__contact">Contact Me</a>
      </div>
    </div>

    <div className="About-SectionOne-right">
      <img src="../../static/images/chart.svg" />
    </div>
  </div>
);

export default SectionOne;
