import React from 'react';
import ProjectCard from './ProjectCard';

const SectionTwo = () => (
  <div className="SectionTwo">
    <h2 className="SectionTwo__title ">Projects</h2>
    <div className="SectionTwo-images">
      <img className="SectionTwo__images" src="../../../static/images/gopher.webp" alt="Golang Gopher"/>
      <img className="SectionTwo__images" src="../../../static/images/enzyme.png" alt="AirBnB logo" />
      <img className="SectionTwo__images" src="../../../static/images/docker.png" alt="Docker logo" />
      <img className="SectionTwo__images" src="../../../static/images/node.png" alt="Node js logo" />
      <img className="SectionTwo__images" src="../../../static/images/react-pic.png" alt="React js logo" />
      <img className="SectionTwo__images" src="../../../static/images/redux.png" alt="Redux logo" />
      <img className="SectionTwo__images" src="../../../static/images/socketio.png" alt="Socket io logo" />
      <img className="SectionTwo__images" src="../../../static/images/mysql.svg" alt="MySQL logo" />
    </div>

    <div className="Projects">
      <ProjectCard    
        title="Golang"
        list={[
          'Consume an API',
          'Create a REST API',
          'Create a Network Command Line Interface',
          'Use Golang with an ORM',
          'Use Golang with MySQL',
          'Websockets with Golang',
          'Oauth2 authentication with Golang'
        ]}
      />

      <ProjectCard    
        title="React & Redux"
        list={[
          'E-commerce Site',
          'Expense Tracker with Login authenctation',
          'Comment Section',
          'Portfolio Website'
        ]}
      />
    </div>
  </div>
);

export default SectionTwo;