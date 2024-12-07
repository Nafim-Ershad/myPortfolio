import React from 'react';

import './styles.scss';

import json from "../../utils/data.json";

const { experience } = JSON.parse(JSON.stringify(json));

function Index(): React.ReactNode {
    console.log(experience)
    return (
        <>
        {
            experience.map((exp) => {
                return(
                    <div className="job-container">
                        <div className="job-heading">
                            <div className="job-title">
                                <div className="name">{exp.title}</div>
                                {exp.dept && <div className="dept">, {exp.dept}</div>}
                            </div>
                            <div className="job-subtitle">
                                <div className="company-name">{exp.company}</div>
                                <div className="timeline">{exp.from} - {exp.to}</div>
                            </div>
                        </div>
                        <ul className="job-description">
                            {
                                exp.works.map((work) => <li>{work}</li>)
                            }
                        </ul>
                    </div>
                )
            })
        }
        </>
    )
}

export default Index