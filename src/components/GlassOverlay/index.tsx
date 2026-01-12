import React from "react";

import "./styles.scss";

function Index(props: React.HTMLAttributes<HTMLDivElement>) {
    return(
        <div className="glass-overlay" style={{...props.style}} {...props}>

        </div>
    )
}

export default Index;