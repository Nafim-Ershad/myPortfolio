// THIS COMPONENT CONTAINS ALL THE OTHER COMPONENTS

import { createRoot } from "react-dom/client";
import React from "react";

import NavBarComponent from "./NavBar/NavBar.component";
import SkillContainerComponent from "./SkillContainer/SkillContainer.component";
import AboutContainerComponent from "./AboutContainer/AboutContainer.component";
import EducationContainer from "./EducationContainer";
import JobContainer from "./JobContainer";
import ProjectContainer from "./ProjectContainer/ProjectContainer.component";

// NAVBAR
const navbarComponent = document.getElementById("navbar"); 
if(navbarComponent){
    createRoot(navbarComponent).render(
        <NavBarComponent/>
    )
}

// ABOUT CONTAINER
const aboutContainer = document.querySelector(".about-container");
if(aboutContainer){
    createRoot(aboutContainer).render(
        <AboutContainerComponent/>
    )
}

// EDUCATION CONTAINER
const educationContainer = document.querySelector('#education .container');
if(educationContainer){
    createRoot(educationContainer).render(
        <EducationContainer/>
    )
}

// EXPERIENCE CONTAINER
const jobContainer = document.querySelector("#experience .container");
if(jobContainer){
    createRoot(jobContainer).render(
        <JobContainer/>
    )
}


// TECH AND TOOL CONTAINER
const techSkillContainer = document.getElementById("tech-skills");
if(techSkillContainer){
    createRoot(techSkillContainer).render(
        <SkillContainerComponent/>
    )
}


// PROJECT CONTAINER
const projectContainer = document.getElementById("project-component");
if(projectContainer){
    createRoot(projectContainer).render(
        <ProjectContainer/>
    )
}
