import React from "react";

import GlassOverlay from "../GlassOverlay";
import MouseMove from "../MouseMove";

export default function Index() {
    return(
        <div style={{position: 'relative', zIndex: -1}}>
            <MouseMove />
            <GlassOverlay style={{position: 'absolute', inset: '0px'}}/>
        </div>
    )
}