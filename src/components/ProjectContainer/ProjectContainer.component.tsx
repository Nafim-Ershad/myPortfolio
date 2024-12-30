import React, { useState } from 'react';
import { circularNumber } from '../../utils/utils';

import "./ProjectContainer.styles.scss";

// Types import
import { type Project } from '../../utils/Types';

// Component Import
import ProjectCard from '../ProjectCard/ProjectCard.component';

// Project Info Data
import json from "../../utils/data.json";

const data = JSON.parse(JSON.stringify(json))


function ProjectContainer(){
    const [current, setCurrent] = useState<number>(0);

    const handleClick = (arrow: string): void => {
        if(arrow === "right"){
            setCurrent(circularNumber(current + 1, data.projects.length));
        }
        else{
            setCurrent(circularNumber(current - 1, data.projects.length));
        }
    }

    // console.log(current);

    return(
        <div className="project-container">
            {
                data.projects.map((project: Project, idx: number) => (<ProjectCard project={project} num={idx} current={current} key={idx}/>))
            }

            <span className="arrow left" onClick={() => handleClick("left")}>{`<`}</span>
            <span className="arrow right" onClick={() => handleClick("right")}>{'>'}</span>
        </div>
    )
}

export default ProjectContainer;
