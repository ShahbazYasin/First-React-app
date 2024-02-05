import React from "react";


let paraColor = {
    color: "brown",
    textAlign: "center",
    margin: "30px 0px",
    textTransform: "capitalize",
    fontFamily: "sans-serif",
}

function Para() {
    return (<>
        <p style={paraColor}>My skills list here.</p>
    </>
    );
}

export default Para;