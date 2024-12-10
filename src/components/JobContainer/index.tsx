import React from 'react';

import './styles.scss';

import json from "../../utils/data.json";

type ExpType = {
    title: string,
    dept?: string,
    company: string,
    from: string,
    to: string,
    works: string[]
}

const { experience } = JSON.parse(JSON.stringify(json));

function Index(): React.ReactNode {
    console.log(experience)
    return (
        <>
        {
            experience.map((exp: ExpType) => {
                return(
                    <div className="job-container" data-aos="fade-up">
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