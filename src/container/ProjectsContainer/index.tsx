import React from "react";
import { NavLink } from "react-router";
import { ChevronLeft } from "lucide-react";

import "./styles.scss";

// Project Info Data
import json from "../../utils/data.json";
import type { ProjectType } from "../../utils/Types";

import ProjectCard from "../../components/ProjectCard";

const {projects} = JSON.parse(JSON.stringify(json));

export default function Index()
{
    return(
        <div className="projects-container">
            <div className="wrapper">
                {projects.map((project: ProjectType) => (
                    <ProjectCard key={React.useId()} project={project}/>
                ))}
            </div>

            <NavLink to="/" className="back-home">
                <ChevronLeft />
                <span>Back Home</span>
            </NavLink>
        </div>
    )
}