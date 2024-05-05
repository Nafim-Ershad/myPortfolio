import React from 'react';
import { createRoot } from 'react-dom/client';

// Types import
import { type Project } from '../utils/Types';

// Component Import
import ProjectCard from './ProjectCard.component';

// Project Info Data
import json from "../utils/project.json";

const data = JSON.parse(JSON.stringify(json))

function ProjectContainer(){
    return(
        <div className="project-container">
            {
                data.projects.map((project: Project) => (<ProjectCard project={project}/>))
            }
        </div>
    )
}

const dom = document.getElementById("project-component");
if(dom){
    const root = createRoot(dom);
    root.render(
        <ProjectContainer/>
    )
}
