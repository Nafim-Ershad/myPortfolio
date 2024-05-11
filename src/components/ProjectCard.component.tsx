import React, {useRef, useEffect} from "react";
import TechLogo from "./TechLogo.component";
import { Project_Card } from "../utils/Types";


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

    const offsetX = ((x - cardX) / cardX) * 15
    const offsetY = ((y - cardY) / cardY) * 15

    card.style.setProperty('--rotateX', `${offsetX}deg`)
    card.style.setProperty('--rotateY', `${-1 * offsetY}deg`)
}

function cardReset(card: HTMLDivElement){
    card.style.setProperty('--rotateX', `${0}deg`)
    card.style.setProperty('--rotateY', `${0}deg`)
}

function ProjectCard({project}: Project_Card){
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

    return (
        <div className="card-container" ref={ref}>
            <h2 className="card-title">
                {project.name}
            </h2>
            <span className="short-description">
                {project.s_desc}
            </span>
            <span className="link">
                <a href={project.url} target="__blank">
                    Visit Live -{'>'}
                </a>
            </span>
            <span className="tech-logos">
                {
                   project.src.map((src:string) => <TechLogo src={src}/>) 
                }
            </span>
        </div>
    )
}

export default ProjectCard;