// HammerUnderConstruction.jsx
import React, { HTMLAttributes } from "react";

const UnderConstruction = (props: HTMLAttributes<HTMLDivElement>) => (
    <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffcc00",
            backgroundColor: "#1a1a1a", 
            ...(props.style || {})
        }}
        {...props}
    >
        <h1>🚧 Under Construction 🚧</h1>
        <p>This section is currently under construction. Please check back later!</p>
    </div>
);

export default UnderConstruction;
