import React from "react";

let flex = {
  textAlign: "Center",
  backgroundColor: "orange",
  padding: "5px",
}


function OrderList(){
    return(
      <div style={flex}>
        <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Bootstrape</li>
      <li>React.js</li>
      <li>React.js</li>
    </ol>
    </div>
    );
}

export default OrderList;
