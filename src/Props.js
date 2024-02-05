import React from "react";

let cardStyle = {
    border: "2px solid black",
    color: "green",
    backgroundColor: "white",
    width: "200px",
    height: "300px",
    margin: "10px",
}

let imgSize ={
    width: "100px",
    height: "100px",
    margin: "40px 0px 10px 0px",
    
}

let imgPosition ={
    display: "flex",
    justifyContent: "center",
}

let cardText ={
    margin: "10px 10px",
    textAlign: "center",

}

let signstyle = {
    color: "green",
    margin: "10px 10px",
    textAlign: "right",
    fontSize: "10px",

}

function Card(Props){
    return(
        <>
        <div style={cardStyle}>
            <div style={imgPosition}>
            <img src={Props.Imagesrc}
             alt="Emp-Image" style={imgSize} />
             </div>
            <div style={cardText}>
                <h1>{Props.Designation}</h1>
                <h3>{Props.EmpName}</h3>
                <h3>{Props.Mobile}</h3>
                <p>{Props.CompanyName}</p>
            </div>
            <div style={signstyle}>sign.__________________</div>
        </div>
        </>
    );
}

export default Card;