import React from "react";
import "./styles.scss";

import { waveform } from 'ldrs'

waveform.register();


export default function Index(){
    return(
        <div className="loading-container">
            <l-waveform
            size="35"
            stroke="3.5"
            speed="1" 
            color="black" 
            ></l-waveform>
        </div>
    )
}
