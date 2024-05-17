import React from 'react';
import "./AboutContainer.component.scss";

const AboutContainerComponent = () => {
  return (
    <div className="whole-container">
        <div className="photo-container">
            <img src="./assets/images/my-photo.jpg" alt="my-pic" className="photo" />
        </div>
        <div className="about-me-container">
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
    </div>
  )
}

export default AboutContainerComponent;