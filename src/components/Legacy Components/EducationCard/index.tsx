import React, { HTMLAttributes } from "react"
import { EdType } from "../EducationContainer"

import "./styles.scss";

interface iComponent extends HTMLAttributes<HTMLDivElement>{
    edContent: EdType;
}

export default function EducationCard({ edContent }: iComponent ){
    return(
        <div className="card-container">
            <div className="card-header">
                <div className="logo">
                    <img src={edContent.imgURL} alt="logo" />
                </div>
                <div className="name">
                    <div className="level">{ edContent.level } <span>in</span></div>
                    <div className="major">{ edContent.department }</div>
                </div>
                <div className="institute">
                    <div className="name">
                        { edContent.institute }
                    </div>
                    <div className="area">
                        { edContent.area }
                    </div>
                </div>
            </div>
            <div className="card-body">
                <span className="result">Result: {edContent.score} / {edContent.total}</span>
                <span className="year">{ edContent.year }</span>
            </div>
        </div>
    )
}