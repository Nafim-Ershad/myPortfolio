import React, {useRef, useState} from 'react'

import TechContainerComponent from '../TechContainer/TechContainer.component';
import ToolContainerComponent from '../ToolContainer/ToolContainer.component';

const SkillContainerComponent = ():React.ReactNode => {

    const techTab = useRef<HTMLElement>(null);
    const toolTab = useRef<HTMLElement>(null);

    const [skillTab, setskillTab] = useState<string>("tech");

    const removeActiveClass = (): void => {
        techTab.current?.classList.remove("active");
        toolTab.current?.classList.remove("active");
    }

    const handleSkillChange = (e: React.MouseEvent, skill: string): void => {
        removeActiveClass();

        (e.target as HTMLElement).classList.add("active");

        setskillTab(skill);
    }

    return (
        <>
            <div className="title">Skills</div>
            <div className="tab-container">
                <span ref={techTab} className="tab tech active" onClick={e => handleSkillChange(e, "tech")}>Technology</span>
                <span ref={toolTab} className="tab tools " onClick={(e) => handleSkillChange(e, "tools")}>Tools</span>
            </div>
            <div id="skills-component">
                {
                    skillTab === "tech" ? 
                    <TechContainerComponent/> :
                    <ToolContainerComponent/>
                }
            </div>
        </>
    )
}

export default SkillContainerComponent