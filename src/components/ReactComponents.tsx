// THIS COMPONENT CONTAINS ALL THE OTHER COMPONENTS



// ************************************* LEGACY CODE *************************************

import React from "react";

import NavBarComponent from "./NavBar/NavBar.component";
import SkillContainerComponent from "./SkillContainer/SkillContainer.component";
import AboutContainerComponent from "./AboutContainer/AboutContainer.component";
import EducationContainer from "./EducationContainer";
import JobContainer from "./JobContainer";
import ProjectContainer from "./ProjectContainer/ProjectContainer.component";

// import LoadingComponent from "./LoadingComponent";


// const navbarComponent = document.getElementById("navbar"); 
// const aboutContainer = document.querySelector(".about-container");
// const educationContainer = document.querySelector('#education .container');
// const jobContainer = document.querySelector("#experience .container");
// const techSkillContainer = document.getElementById("tech-skills");
// const projectContainer = document.getElementById("project-component");

// const allComponent: iComponentLoad[] = [
//     {
//         container: navbarComponent,
//         component: <NavBarComponent />
//     },
//     {
//         container: aboutContainer,
//         component: <AboutContainerComponent />
//     },{
//         container: educationContainer,
//         component: <EducationContainer />
//     },{
//         container: jobContainer,
//         component: <JobContainer />
//     },{
//         container: techSkillContainer,
//         component: <SkillContainerComponent />
//     },{
//         container: projectContainer,
//         component: <ProjectContainer />
//     }
// ];
// const roots = new Map<HTMLElement | Element, any>();

// function loadComponent(container: HTMLElement | Element | null, component: React.ReactNode){
//     if(container) {
//         if (!roots.has(container)) {
//             roots.set(container, createRoot(container));
//         }
//         roots.get(container).render(component);
//     }
// }

// function loadAllComponents(collection: iComponentLoad[])
// {
//     collection.forEach(el => {
//         loadComponent(el.container, el.component);
//     })
// }

function App(){
    return(
        <>
            <nav id="navbar">
                <NavBarComponent/>
            </nav>
            <section id="hero">
                <div className="hero-container">
                    <div className="wave-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 50 1200 500">
                        <path id="wave1" fill="#273036" fill-opacity="1"
                        d="M0,160L48,154.7C96,149,192,139,288,133.3C384,128,480,128,576,128C672,128,768,128,864,133.3C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                        </path>
                        <path id="wave2" style={{ visibility: 'hidden' }} fill="#273036" fillOpacity="1"
                        d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                        </path>
                    </svg>
                    </div>
                    <div className="info-container">
                    <h1 data-aos="slide-up">Nafim Ershad</h1>
                    <p data-aos="slide-up">A web developer, an engineer and a tech enthusiast</p>
                    </div>
                </div>
            </section>
            <section id="about">
                <div id="particles"></div>
                <div className="about-container">
                    <AboutContainerComponent/>
                </div>
            </section>
            <section id="education">
                <div className="title">EDUCATION</div>
                <div className="container">
                    <EducationContainer/>
                </div>
            </section>
            <section id="experience">
                <div className="title">PROFESSIONAL EXPERIENCE</div>
                <div className="container">
                    <JobContainer/>
                </div>
            </section>
            <section id="tech-skills">
                <SkillContainerComponent/>
            </section>
            <section id="projects">
                <h1 className="title">PERSONAL PROJECTS</h1>
                <div id="project-component">
                    <ProjectContainer/>
                </div>
            </section>
            <a id="contact-container" href="./pages/contact/index.html">
            <span className="material-symbols-outlined">chat</span>
            </a>
        </>
    )
}

export default App;

// // NAVBAR
// const navbarComponent = document.getElementById("navbar"); 
// if(navbarComponent){
//     createRoot(navbarComponent).render(
//         <NavBarComponent/>
//     )
// }

// // ABOUT CONTAINER
// const aboutContainer = document.querySelector(".about-container");
// if(aboutContainer){
//     createRoot(aboutContainer).render(
//         <AboutContainerComponent/>
//     )
// }

// // EDUCATION CONTAINER
// const educationContainer = document.querySelector('#education .container');
// if(educationContainer){
//     createRoot(educationContainer).render(
//         <EducationContainer/>
//     )
// }

// // EXPERIENCE CONTAINER
// const jobContainer = document.querySelector("#experience .container");
// if(jobContainer){
//     createRoot(jobContainer).render(
//         <JobContainer/>
//     )
// }


// // TECH AND TOOL CONTAINER
// const techSkillContainer = document.getElementById("tech-skills");
// if(techSkillContainer){
//     createRoot(techSkillContainer).render(
//         <SkillContainerComponent/>
//     )
// }


// // PROJECT CONTAINER
// const projectContainer = document.getElementById("project-component");
// if(projectContainer){
//     createRoot(projectContainer).render(
//         <ProjectContainer/>
//     )
// }
