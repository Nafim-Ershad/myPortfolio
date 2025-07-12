// THIS COMPONENT CONTAINS ALL THE OTHER COMPONENTS
import React, { useEffect, useState } from "react";

import NavBarComponent from "./NavBar/NavBar.component";
import SkillContainerComponent from "./SkillContainer/SkillContainer.component";
import AboutContainerComponent from "./AboutContainer/AboutContainer.component";
import EducationContainer from "./EducationContainer";
import JobContainer from "./JobContainer";
import ProjectContainer from "./ProjectContainer/ProjectContainer.component";

// import AnimatedWave from "./AnimatedWave";

import LoadingComponent from "./LoadingComponent";

function App(){
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

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
                        {/* <div className="wave-container">
                        <AnimatedWave/>
                        </div> */}
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
