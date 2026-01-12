import React from 'react';

import './ToolTip.Styles.scss';

type ToolTipType = {
    label?: string,
    left?: number,
    top?: number
}

export default function ToolTip({ label, left, top }: ToolTipType): React.ReactNode{
    return(
        <div className="tooltip-container" style={{left: `${left}px`, top: `${top}px`}}>
            <span className="tooltip-label">{ label }</span>
        </div>
    )
}