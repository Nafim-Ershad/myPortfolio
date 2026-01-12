import React from "react";

import "./styles.scss";

import type { ProjectCardProps } from "../../utils/Types";
import { Github } from "lucide-react";



export default function Index({project} : ProjectCardProps) {
    return(
        <div className="card-container">
            <div className="card-wrapper">
                <h2 className="project-name">
                    {project.name}
                </h2>
                <p className="project-description">
                    {project.description}
                </p>

                <a href={project.git}>
                    <Github />
                </a>
            </div>
        </div>
    )
}