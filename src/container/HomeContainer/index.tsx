import React from "react";

import "./styles.scss";

import { NavLink } from "react-router";
import { 
    ChevronRight, 
    Facebook, 
    Instagram, 
    Twitter, 
    Mail, 
    FolderKanban,
    Contact,
    GalleryVerticalEnd,
    Linkedin
} from "lucide-react";
import { useAppContext } from "../../context/AppContext";

import Portfolio from "../../components/Portfolio";

function Index() {

    const { showPortfolio, setShowPortfolio } = useAppContext();

    const handlePortfolioClick = (e: React.MouseEvent) => {
        e.preventDefault();

        setShowPortfolio(!showPortfolio);
    }

    return(
        <div className="home-container">
            <div className="content">
                <div className="top-container">
                    <div className="image-container">
                        <img src="./assets/images/my-photo.webp" alt="my-pic" className="photo"/>
                    </div>
                    <div className="information-container">
                        <div className="left">
                            <div className="info-content">
                                <h1>Nafim Ershad</h1>
                                <h2>Junior Software Engineer</h2>
                                <p>
                                    I’m an Aeronautical Engineer. My passion lies in engineering, where I excel at analytical problem solving. Additionally, I’m a quick learner. I am eager to learn new technologies and techniques whenever I get the chance. When I’m not learning, you’ll find me playing video games.
                                </p>
                            </div>
                            <div className="button">
                                <NavLink to="/about" className="about-me">
                                    <p>
                                        About Me
                                    </p>

                                    <ChevronRight/>

                                </NavLink>
                                <div className="border"></div>
                            </div>
                        </div>

                        <div className="right">
                            
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="grid">
                        <div className="left">
                            <NavLink to="/projects">
                                <FolderKanban />
                                <p>
                                    Projects
                                </p>
                            </NavLink>
                            <NavLink to="/contact">
                                <Contact />
                                <p>
                                    Contact
                                </p>
                            </NavLink>
                        </div>
                        <div className="right">
                            <div className="portfolio-button" onClick={handlePortfolioClick}>
                                <div>
                                    <GalleryVerticalEnd />
                                    <p>
                                        Portfolio
                                    </p>
                                </div>
                            </div>
                            <div className="socials-container">
                                <NavLink to="https://www.linkedin.com/in/nafim-ershad/"><Linkedin /></NavLink>
                                <NavLink to="https://www.facebook.com/Nafim.Ershad/"><Facebook/></NavLink>
                                <NavLink to="https://www.instagram.com/nafim_ershad/"><Instagram/></NavLink>
                                <NavLink to="https://x.com/nafim_ershad"><Twitter /></NavLink>
                                <NavLink to="mailto:inan.nafim1089@outlook.com"><Mail /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 


            {showPortfolio && <Portfolio />}
        </div>
    )
}


export default Index;