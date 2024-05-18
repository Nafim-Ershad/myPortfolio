import React from 'react';

import "./techIcon.styles.scss";

function TechIcon(props: any){
    return(
        <img src={props.src} alt="tech-icon" className='tech-icon'/>
    )
}

export default TechIcon;