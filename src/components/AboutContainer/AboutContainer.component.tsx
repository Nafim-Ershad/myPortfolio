import React from 'react';
import "./AboutContainer.component.scss";

import resume from "../../../src/assets/files/Nafim Ershad Inan.pdf";

const AboutContainerComponent = () => {
  return (
    <div className="whole-container">
        <div className="photo-container" data-aos="fade-right">
            <img src="./assets/images/my-photo.webp" alt="my-pic" className="photo" />
        </div>
        <div className="about-me-container" data-aos="fade-left">
            <div className="about-me">
                <h1>ABOUT ME</h1>
                <div className="paragraph-container">
                    <p>
                        <span>Hi, I’m Nafim Ershad 👋</span><br/>

                        I’m an Aeronautical Engineer. My passion lies in engineering, where I excel at analytical problem solving.
                        Additionally, I’m a quick learner. I am eager to learn new technologies and techniques whenever I get the
                        chance. When I’m not learning, you’ll find me playing video games.
                    </p>
                    <p>
                        Looking forward to connecting with you!
                    </p>
                </div>
            </div>
        </div>

        <div className="resume-container">
            
            <a href={resume} download="Nafim Ershad Inan">
                <span className="material-symbols-outlined">
                    download
                </span>
                Résumé
            </a>
        </div>
    </div>
  )
}

export default AboutContainerComponent;