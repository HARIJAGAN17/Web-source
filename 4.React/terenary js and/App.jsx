import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currTime = new Date(2023, 3, 14, 13).getHours();
console.log(currTime);

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1>:<Login/>} */}
      {currTime >12 && <h1> why are you still working</h1>}
     
    </div>
  );
}

export default App;
