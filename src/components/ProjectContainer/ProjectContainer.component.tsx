import React from 'react';
import "./ProjectContainer.styles.scss";

// Types import
import { type Project } from '../../utils/Types';

// Component Import
import ProjectCard from '../ProjectCard/ProjectCard.component';

// Project Info Data
import json from "../../utils/data.json";

const data = JSON.parse(JSON.stringify(json))

function ProjectContainer(){
    return(
        <div className="project-container">
            {
                data.projects.map((project: Project, idx: number) => (<ProjectCard project={project} key={idx}/>))
            }
        </div>
    )
}

export default ProjectContainer;
