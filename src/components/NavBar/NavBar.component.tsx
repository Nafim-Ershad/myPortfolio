import React from 'react';

import "./navbar.styles.scss";

const NavBarComponent = (): React.ReactNode => {
    return(
        <>
            <div className="logo-container">
                <p>nafim ershad</p>
            </div>
        {/* Desktop */}
            <>
                <ul className='desktop_nav'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tech-skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </>
        {/* Mobile */}
            <>
                <label className="hamburger">
                    <input type="checkbox"/>
                </label>
                <aside className='mobile_nav'>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#tech-skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </aside>
            </>
        </>

        
    )
}

export default NavBarComponent;
