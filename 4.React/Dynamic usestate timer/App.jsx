import React,{useState}from "react";


function App() {
  const [time,setTime] = useState(new Date().toLocaleTimeString());

  function CheckTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(CheckTime,1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={CheckTime}>Get Time</button>
    </div>
  );
}



export default App;
