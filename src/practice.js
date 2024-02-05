
// import "./index.css";

//   <></> this is React.Frgment.+

// const fName = "Shahbaz";
// const lName = "Yasin";
// const location = "Islamabad";
// const currTime = new Date().toLocaleTimeString();
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/301";
// const img3 = "https://picsum.photos/200/302";

// const link = "https://www.geeksforgeeks.org/html-global-attributes/";

// let currDate = new Date(2024, 2, 5, 6);
// console.log(currDate);
// currDate = currDate.getHours();
// let greeting = " ";
// let cssStyle = { };


// if (currDate >= 1 && currDate < 12) {
//   greeting = "Good Morning";
//   cssStyle.color = 'Green';
// } else if (currDate >= 12 && currDate < 19){
//   greeting = "Good Afternoon";
//   cssStyle.color = 'Orange';
// }else {
//   greeting = "Good Night";
//   cssStyle.color = 'Black';
// }


ReactDOM.render(
  <>
    
    <div>

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
      {/* <div>
      <h1 contentEditable="true" className="heading1">Attributes uses and images.</h1>
      <div className="img_style">
      <img src={img1} alt="randomimg" />
      <img src={img2} alt="randomimg" />
      
      
      <a href={link} target="_blank">
      <img src={img3} alt="randomimg" />
      </a>
      </div>
    </div> */}

      {/* <div className="div_tchange">
    <h1 className="HelloSir">Hello Sir, <span style={cssStyle}>{greeting}.</span></h1>
  </div> */}
    </div>

    
    
    
    
  </>,
  document.getElementById("root")
);


