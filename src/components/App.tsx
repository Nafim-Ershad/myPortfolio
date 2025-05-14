// THIS COMPONENT CONTAINS ALL THE OTHER COMPONENTS
import React, { useEffect, useState } from "react";

import NavBarComponent from "./NavBar/NavBar.component";
import SkillContainerComponent from "./SkillContainer/SkillContainer.component";
import AboutContainerComponent from "./AboutContainer/AboutContainer.component";
import EducationContainer from "./EducationContainer";
import JobContainer from "./JobContainer";
import ProjectContainer from "./ProjectContainer/ProjectContainer.component";

import AnimatedWave from "./AnimatedWave";

import LoadingComponent from "./LoadingComponent";

function App(){
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setIsLoading(false);
    }, [])

    return(
        (
            isLoading ? 
            <LoadingComponent/> 
            :
            <>
                <nav id="navbar">
                    <NavBarComponent/>
                </nav>
                <section id="hero">
                    <div className="hero-container">
                        <div className="wave-container">
                        <AnimatedWave/>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 50 1200 500">
                            <path id="wave1" fill="#273036" fillOpacity="1"
                            d="M0,160L48,154.7C96,149,192,139,288,133.3C384,128,480,128,576,128C672,128,768,128,864,133.3C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                            </path>
                            <path id="wave2" style={{ visibility: 'hidden' }} fill="#273036" fillOpacity="1"
                            d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                            </path>
                        </svg> */}
                        </div>
                        <div className="info-container">
                            <h1 >Nafim Ershad</h1>
                            <p>A web developer, an engineer and a tech enthusiast</p>
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
                    <h2 className="title">PERSONAL PROJECTS</h2>
                    <div id="project-component">
                        <ProjectContainer/>
                    </div>
                </section>
                <a id="contact-container" href="./pages/contact/index.html">
                <span className="material-symbols-outlined">chat</span>
                </a>
            </>
        )
    )
}

export default App;
