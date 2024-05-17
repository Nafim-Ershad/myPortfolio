import React from 'react';

import "./techIcon.styyles.scss";

function TechIcon(props: any){
    return(
        <img src={props.src} alt="tech-icon" className='tech-icon'/>
    )
}

export default TechIcon;