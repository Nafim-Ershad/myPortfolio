import React from 'react'

import TechBoxComponent from '../TechBox/TechBox.component';

import "./ToolContainer.styles.scss";

import json from "../../utils/data.json";

const data = JSON.parse(JSON.stringify(json));

const ToolContainerComponent = (): React.ReactNode => {
  return (
    <div className='skills-container-tool'>
        {
            data.toolSkills.map((skill: any, idx: number) => <TechBoxComponent src={skill.src} name={skill.name} key={idx}/>)
        }
    </div>
  )
}

export default ToolContainerComponent;