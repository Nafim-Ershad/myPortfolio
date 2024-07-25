import React, {useRef, useEffect} from "react";
import TechIcon from "../TechIcon/TechIcon.component";
import { Project_Card } from "../../utils/Types";

import "./ProjectCard.styles.scss";

function cardTilt(event: MouseEvent, card: HTMLDivElement){
    //Mouse Position
    const x = event.clientX
    const y = event.clientY

    // Window Center
    // const centerX = window.innerWidth / 2
    // const centerY = window.innerHeight / 2
    
    // Card Center
    const cardX = ((card.getBoundingClientRect().right - card.getBoundingClientRect().left) / 2) + card.getBoundingClientRect().left; 
    const cardY = ((card.getBoundingClientRect().bottom - card.getBoundingClientRect().top) / 2 ) + card.getBoundingClientRect().top; 

    const offsetX = ((x - cardX) / cardX) * 10
    const offsetY = ((y - cardY) / cardY) * 10

    card.style.setProperty('--rotateX', `${offsetX}deg`)
    card.style.setProperty('--rotateY', `${-1 * offsetY}deg`)
}

function cardReset(card: HTMLDivElement){
    card.style.setProperty('--rotateX', `${0}deg`)
    card.style.setProperty('--rotateY', `${0}deg`)
}

function ProjectCard({project, num, current}: Project_Card){
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const element = ref.current;

        element?.addEventListener('mousemove', function(event: MouseEvent){
            cardTilt(event, element)
        })

        element?.addEventListener('mouseleave', function(){
            cardReset(element);
        })

        return () => {
            element?.removeEventListener('mousemove', function(event: MouseEvent){
                cardTilt(event, element)
            })
            element?.removeEventListener('mouseleave', function(){
                cardReset(element)
            })

        }
    }, []);

    const myStyles:React.CSSProperties = {
        left: `${100 * num}%`,
        transform: `translateX(${-100 * current}%)`
    }

    return (
        <div className="card-bg" style={myStyles}>
            <div className="card-container" ref={ref}>
                <h2 className="card-title">
                    {project.name}
                </h2>
                <span className="short-description">
                    {project.s_desc}
                </span>
                <div className="links">
                    <span className="project-link">
                        <a href={project.url} target="__blank">
                            Visit Live -{'>'}
                        </a>
                    </span>
                    <span className="github-link">
                        <a href={project.git} target="__blank">
                            <img src="assets/svg/logos/github.svg" alt="github"/>
                        </a>
                    </span>
                </div>
                <span className="tech-icons">
                    {
                    project.src.map((src:string, idx:number) => <TechIcon src={src} key={idx}/>) 
                    }
                </span>
            </div>
        </div>
    )
}

export default ProjectCard;