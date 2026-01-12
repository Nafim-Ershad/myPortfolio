import React from 'react'

import TechBoxComponent from '../TechBox/TechBox.component';

import "./ToolContainer.styles.scss";

import json from "../../utils/data.json";

const data = JSON.parse(JSON.stringify(json));

const ToolContainerComponent = (): React.ReactNode => {
  return (
    <div className='skills-container-tool'>
      <div className="container">
        {
            data.toolSkills.map((skill: any, idx: number) => <TechBoxComponent src={skill.src} name={skill.name} key={idx}/>)
        }
      </div>
      <div className="container">
        {
            data.toolSkills.map((skill: any, idx: number) => <TechBoxComponent src={skill.src} name={skill.name} key={idx}/>)
        }
      </div>
    </div>
  )
}

export default ToolContainerComponent;