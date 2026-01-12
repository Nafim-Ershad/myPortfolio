import React from 'react';

import './styles.scss';

export default function Index() {
    return(
        <main className='about-container'>
            <h1>About Me</h1>
            <section className="about">
                <h2 className='underline'>About</h2>
                <div className="about-me">
                    <p>Hi, I’m Nafim Ershad 👋</p>
                    <p>I’m an Aeronautical Engineer. My passion lies in engineering, where I excel at analytical problem solving. Additionally, I’m a quick learner. I am eager to learn new technologies and techniques whenever I get the chance. When I’m not learning, you’ll find me playing video games.</p>
                    <p>Looking forward to connecting with you!</p>
                </div>
            </section>

            <section className="education">
                <h2 className='underline'>Education</h2>
                <div className="education-details">
                    <ul className='full-width'>
                        <li>
                            <h3>Bachelor of Science in Aeronautical Engineering</h3>
                            <div className="grid two-columns">
                                <p className='italic h-self-start'>Military Institute of Science and Technology</p>
                                <p className="italic h-self-end">CGPA: 3.63/4.00</p>
                                <p className='italic h-self-start'>Feb 2020 - Jan 2025</p>
                                <p className="italic h-self-end">Major: Avionics</p>
                            </div>
                        </li>
                        <li>
                            <h3>High School Certificate</h3>
                            <div className="grid two-columns">
                                <p className='italic h-self-start'>Rajuk Uttara Model College</p>
                                <p className='italic h-self-end'>GPA: 5.00/5.00</p>
                                <p className='italic h-self-start'>Apr 2017 - Jun 2019</p>
                                <p className="italic h-self-end">Group: Science</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="experience">
                <h2 className="underline">Experience</h2>
                <div className="work-details">
                    <ul className='full-width'>
                        <li>
                            <h3>Junior Software Engineer</h3>
                            <div className="grid two-columns">
                                <p className='italic h-self-start'>Ollyo</p>
                                <p className="italic h-self-end">Droip</p>
                                <p className='italic h-self-start'>May 2024 - Present</p>
                                <p className="italic h-self-end"></p>
                            </div>
                        </li>
                        <li>
                            <h3>Technical Executive</h3>
                            <div className="grid two-columns">
                                <p className='italic h-self-start'>Astra Airways</p>
                                <p className="italic h-self-end">Quality Assurance</p>
                                <p className='italic h-self-start'>Sep 2024 - Oct 2024</p>
                                <p className='italic h-self-end'></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="documents">
                <h2 className='underline'>Documents</h2>
                <div className="document-links">
                    <ul className='full-width'>
                    
                    </ul>
                </div>
            </section>
        </main>
    )
}