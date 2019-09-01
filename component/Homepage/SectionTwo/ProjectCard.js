import React from 'react';

const ProjectCard = (props) => (
  <div className="ProjectCard">
    <h3>{props.title}</h3>
    <ul>
      {props.list && 
        props.list.map((item) => {
        return <li>{item}</li>
        })
      }
    </ul>
  </div>
);

export default ProjectCard;