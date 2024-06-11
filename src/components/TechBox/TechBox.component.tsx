import React, { useEffect, useRef, useState } from 'react';
import "./TechBox.styles.scss";

import ToolTip from '../ToolTip/ToolTip.Component';

type TechType = {
    src: string, 
    name: string
}

const TechBoxComponent = ({src, name}: TechType): React.ReactNode => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [ coords, setCoords ] = useState({x: 0, y: 0});
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  
  const handleMouseMove = (event: MouseEvent) => {
    setCoords({
      x:  event.clientX - (event.target as HTMLElement).getBoundingClientRect().left,
      y: event.clientY - (event.target as HTMLElement).getBoundingClientRect().top
    });

    // TESTING
    // console.log(event.clientX, event.clientY);
    // console.log(event.pageX, event.pageY);
    // console.log(event.screenX, event.screenY);
    // console.log((event.target as HTMLElement).offsetLeft, (event.target as HTMLElement).offsetTop);
  }

  const handleMouseEnter = () => {
    setShowToolTip(true);
  }

  const handleMouseLeave = () => {
    setShowToolTip(false);
  }

  useEffect(() => {
    boxRef.current?.addEventListener('mousemove', handleMouseMove);
    boxRef.current?.addEventListener('mouseenter', handleMouseEnter);
    boxRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      boxRef.current?.removeEventListener('mousemove', handleMouseMove);
      boxRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      boxRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [showToolTip, coords]);

  return (
      <div className={`skill ${name}`} ref={boxRef}>
          <img src={src} alt={name}/>
          {
            showToolTip ? 
            <ToolTip label={name} left={coords.x} top={coords.y}/>
            :
            <></>
          }
      </div>
      
  )
}

export default TechBoxComponent