import React from 'react';

function TechLogo(props: any){
    console.log(props.src)
    return(
        <img src={props.src} alt="tech-logo" className='tech-logo'/>
    )
}

export default TechLogo;