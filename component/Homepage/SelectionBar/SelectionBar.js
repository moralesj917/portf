import React from 'react';

const SelectionBar = (props) => (
  <div className="SelectionBar">
    <button className="SelectionBar__button" onClick={() => props.handleStatus("skills")}>Skills</button>
    <button className="SelectionBar__button SelectionBar__button--center" onClick={() => props.handleStatus("projects")}>Projects</button>
    <button className="SelectionBar__button " onClick={() =>props.handleStatus("experience")}>Experience</button>
  </div>
);

export default SelectionBar;