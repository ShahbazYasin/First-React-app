import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//   <></> this is React.Frgment.

const fName = "Shahbaz";
const lName = "Yasin";
const location = "Islamabad";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/301";
const img3 = "https://picsum.photos/200/302";
// const img4 = "https://picsum.photos/200/303";
// const img5 = "https://picsum.photos/200/304";
// const img6 = "https://picsum.photos/200/305";
// const img7 = "https://picsum.photos/200/306";
// const img8 = "https://picsum.photos/200/307";
// const img9 = "https://picsum.photos/200/308";
// const img10 = "https://picsum.photos/200/309";
// const img11 = "https://picsum.photos/200/310";
// const img12 = "https://picsum.photos/200/311";
const link = "https://www.geeksforgeeks.org/html-global-attributes/";

ReactDOM.render(
  <>  
  {/* <div>
  This is my 1st react app.
  <h1>My Skills</h1>
  <p>My skills list here.</p>
  <ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Bootstrape</li>
    <li>React.js</li>
  </ol>

this is simple way.

<h1>My First Name is {fName}.</h1>
<h1>My Last Name is {lName}.</h1>
<h1>My age is {100-73} Years.</h1>
<h1>My Location is {location}.</h1>

this is template literals way.

<h1>{`My first name is ${fName} 
and my last name is ${lName}. My age is ${20+7}.
My location is ${location}.`}</h1>
</div> */}

{/* <div>This is a 2nd Challenge.
<h1>My Name is {`${fName} ${lName}`}.</h1>
<p>Today Date = {currDate}.</p>
<p>Now Time = {currTime}.</p>
</div> */}

<h1 contentEditable="true" className="heading1">Attributes uses and images.</h1>
<div className="img_style">
<img src={img1} alt="randomimg" />
<img src={img2} alt="randomimg" />
{/* <img src={img4} alt="randomimg" />
<img src={img5} alt="randomimg" />
<img src={img6} alt="randomimg" />
<img src={img7} alt="randomimg" />
<img src={img8} alt="randomimg" />
<img src={img9} alt="randomimg" />
<img src={img10} alt="randomimg" />
<img src={img11} alt="randomimg" />
<img src={img12} alt="randomimg" /> */}

<a href={link} target="_blank">
<img src={img3} alt="randomimg" />
</a>
</div>

  </>,
  document.getElementById("root")
);