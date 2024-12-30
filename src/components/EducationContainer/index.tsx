import React, { CSSProperties, useState } from 'react';
import EducationCard from '../EducationCard';
import json from "../../utils/data.json";

import "./styles.scss";

export type EdType = {
    level: string,
    year: number,
    institute: string,
    department: string,
    score: number,
    total: number,
    imgURL: string,
    area: string
}

const { education } = JSON.parse(JSON.stringify(json));

export default function Index(){

    const [ index, setIndex ] = useState<number>(0);

    const next = () => {
        setIndex(prevState => (prevState + 1) % 3);
    }

    const prev = () => {
        if(index > 0)
        {
            setIndex(prevState => prevState - 1);
        }
        else
        {
            setIndex(2);
        }
    }

    return(
        <div className='carousel-container'>
            <div className='carousel-tracker' style={{ "--index-number": index} as CSSProperties}>
                {
                    education.map((ed: EdType) => (
                        <EducationCard edContent={ed}/>
                    ))
                }
            </div>
            <div className={`arrow left ${index === 0 && "hidden"}`} onClick={prev}>&lt;</div>
            <div className={`arrow right ${index === 2 && "hidden"}`} onClick={next}>&gt;</div>
        </div>
    )
}