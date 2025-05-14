import React from 'react';

import "./styles.scss";

const Index = () => {
    return(
        <div className="box">
            <div className="box-inner" style={{ transform: "rotate(180deg)"}}></div>
            <div className="box-inner" style={{ transform: "rotate(0deg)"}}></div>
        </div>
    )
}

export default Index;