import React from "react";
import './index.css';

function Welcome() {
    let currDate = new Date(2024, 2, 5, 5);
    currDate = currDate.getHours();
    let greeting = " ";
    let cssStyle = {};


    if (currDate >= 1 && currDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = 'Green';
    } else if (currDate >= 12 && currDate < 19) {
        greeting = "Good Afternoon";
        cssStyle.color = 'Orange';
    } else {
        greeting = "Good Night";
        cssStyle.color = 'Black';
    }
    return (
        <div className="div_tchange">
            <h1 className="HelloSir">Hello Sir, <span style={cssStyle}>{greeting}.</span></h1>
        </div>
    );
}

export default Welcome;