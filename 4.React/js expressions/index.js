import React from "react";
import ReactDOM from "react-dom";

const name = "hari";
const num = 7;
ReactDOM.render(<div><h1>Hello {name}!</h1><p>Your lucky nymber is {num}</p></div>, document.getElementById("root"));

//{${}} string interpreted