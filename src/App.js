import React from "react";
import Heading from "./Heading.js";
import Para from "./Para.js";
import OrderList from "./OrderList.js";
import Welcome from "./Welcome.js";
import { add, sub, mul, div } from "./Calc.js";
import Card from "./Props.js";
import Emp from "./Card.css";


function App() {

    return (
        <>
            {/* <Heading />
            <Para />
            <OrderList />
            <Welcome /> */}

            {/* <h1>Sum of two numbers is {add(40,4)} </h1>
           <h1>Sub of two numbers is {sub(40,4)} </h1>
           <h1>Mul of two numbers is {mul(40,4)} </h1>
           <h1>Div of two numbers is {div(40,3)} </h1> */}
            <div className="main-div">
                <Card 
                Imagesrc="https://www.visasforfuture.com/wp-content/uploads/2023/11/IMG_4344.jpg" 
                Designation="Accountant" 
                EmpName="Muhammad Ali"
                Mobile="0311-1234567" 
                CompanyName="Darul Madina" />

                <Card 
                Imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6V_3FZfxvF0FfzYV73xgRF2kkCsNw2yMJjulshmxY9uQwWTWmELr25I-GuyKOZOhhpuc&usqp=CAU"
                Designation="Data Entry" 
                EmpName="Muhammad Yousuf"
                Mobile="0311-1234568" 
                CompanyName="Darul Madina"  />

                <Card 
                Imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncifmfPVULKdz_gGsYNW8BSF8AcBP23czPHoV_YP6hfXqIN-e-7AHU2fqu1bJA3ilL_Y&usqp=CAU"
                Designation="Assitant" 
                EmpName="Muhammad Amir"
                Mobile="0311-1234564" 
                CompanyName="Darul Madina"  />

                <Card 
                Imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr2fTq0q__320LCo_M6aCfIbuasdrYiX7KzAbX3xPqVZRauTH8eZnQN2Bdq3uPEWgwhc&usqp=CAU"
                Designation="Office Boy" 
                EmpName="Muhammad Khalid"
                Mobile="0311-1234565" 
                CompanyName="Darul Madina"  />

            </div>
        </>
    );
}

export default App;