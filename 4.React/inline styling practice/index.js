//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

//it correct but use like
//customcolor.color;
const date = new Date();
const currHour = date.getHours();

var what = "Good Morning";
const morning = {
   color: "red",
};
const afternoon = {
    color: "green",
 };
const  night = {
    color: "blue",
 };

let styles = morning;
if(currHour>=12 && currHour < 18){

 what = "Good Afternoon";
 styles = afternoon;
}
else if(currHour>=18 && currHour<=23){
    what  = "Good Evening"
    styles = night;
}

ReactDom.render(
<div>
<h1 className ="heading" style={styles}>{what}</h1>
</div>,
document.getElementById("root"));