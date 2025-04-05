import React from 'react'

import TechBoxComponent from '../TechBox/TechBox.component';

import "./TechContainer.styles.scss";

import json from "../../utils/data.json";

const data = JSON.parse(JSON.stringify(json));

const TechContainerComponent = (): React.ReactNode => {
  return (
    <div className='skills-container-tech'>
      <div className="container">
        {
            data.techSkills.map((skill: any, idx: number) => <TechBoxComponent src={skill.src} name={skill.name} key={idx}/>)
        }
      </div>
      <div className="container">
        {
            data.techSkills.map((skill: any, idx: number) => <TechBoxComponent src={skill.src} name={skill.name} key={idx}/>)
        }
      </div>
    </div>
  )
}

export default TechContainerComponent;