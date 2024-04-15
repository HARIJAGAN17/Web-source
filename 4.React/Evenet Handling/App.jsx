import React,{useState} from "react";

function App() {
  const [isOn,setOn] = useState(false);

function  handleOn() {
  setOn(true);
}
function handleOff() {
  setOn(false);
}

const buttonStyle = {
  backgroundColor:isOn? "black":null
}
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?"/>
      <button style = {buttonStyle} onMouseOver = {handleOn} onMouseOut = {handleOff}>Submit</button>
    </div>
  );
}

export default App;
