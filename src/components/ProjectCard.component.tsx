import React, {useRef, useEffect} from "react";
import TechLogo from "./TechLogo.component";
import { Project_Card } from "../utils/Types";


function cardTilt(event: MouseEvent, card: HTMLDivElement){
    //Mouse Position
    const x = event.clientX
    const y = event.clientY
    // Window Center
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const offsetX = ((x - centerX) / centerX) * 10
    const offsetY = ((y - centerY) / centerY) * 10

    card.style.setProperty('--rotateX', `${offsetX}deg`)
    card.style.setProperty('--rotateY', `${-1 * offsetY}deg`)
}

function ProjectCard({project}: Project_Card){
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const element = ref.current;

        element?.addEventListener('mousemove', function(event: MouseEvent){
            cardTilt(event, element)
        })

        return () => {
            element?.removeEventListener('mousemove', function(event: MouseEvent){
                cardTilt(event, element)
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
            <span className="tech-logos">
                {
                   project.src.map((src:string) => <TechLogo src={src}/>) 
                }
            </span>
        </div>
    )
}

export default ProjectCard;