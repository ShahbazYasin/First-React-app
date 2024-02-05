import React from "react";

let textColor = {
    color: "brown",
    textAlign: "center",
    margin: "30px 0px",
    textTransform: "capitalize",
    fontFamily: "sans-serif",
}

function Heading() {
    return (
        <h1 style={textColor}>My Skills</h1>
    );
}

export default Heading;