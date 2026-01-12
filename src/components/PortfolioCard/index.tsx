import React from 'react';
import { NavLink } from 'react-router';

import "./styles.scss";

import { Github, Radio } from 'lucide-react';

import { PortfolioCardProps } from '../../utils/Types';

export default function Index( {data} : PortfolioCardProps)
{
    return(
        <div className="portfolio-card-container">
            <div className="portfolio-project-name">
                <span>
                    {data.name}
                </span>
            </div>

            <div className="portfolio-project-short">
                <p>
                    {data.s_desc}
                </p>
            </div>

            <div className="portfolio-project-icons">
                {
                    data.src.map((url:string) => (
                        <img src={url} about='logo'/>
                    ))
                }
            </div>

            <div className="link-container">
                {
                    data.url ? 
                        <NavLink to={data.url}>
                            <Radio />
                            <span>
                                Live
                            </span>
                        </NavLink>
                    :
                        <></>
                }
                <NavLink to={data.git} className='github-url'>
                    <span>Github</span>
                    <Github />
                </NavLink>
            </div>

            
        </div>
    )
}