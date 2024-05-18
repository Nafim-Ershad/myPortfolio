import React from 'react';
import "./TechBox.styles.scss";

type TechType = {
    src: string, 
    name: string
}

const TechBoxComponent = ({src, name}: TechType): React.ReactNode => {
  return (
    <div className={`skill ${name}`}>
        <img src={src} alt={name} />
    </div>
  )
}

export default TechBoxComponent