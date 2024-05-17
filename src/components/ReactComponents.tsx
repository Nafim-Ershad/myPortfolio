// THIS COMPONENT CONTAINS ALL THE OTHER COMPONENTS

import { createRoot } from "react-dom/client";
import React from "react";

import NavBarComponent from "./NavBar/NavBar.component";
import AboutContainerComponent from "./AboutContainer/AboutContainer.component";
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


// PROJECT CONTAINER
const projectContainer = document.getElementById("project-component");
if(projectContainer){
    createRoot(projectContainer).render(
        <ProjectContainer/>
    )
}
