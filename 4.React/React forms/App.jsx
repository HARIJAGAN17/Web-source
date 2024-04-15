import React,{useState} from "react";

function App() {

  const [name,setName] = useState("");
  const [currname,setcurrname] = useState("");

  function handleChange(event) {
   setName(event.target.value);
  }
  
  function handleClick(){
    setcurrname(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>{currname} </h1>
      <form>
      <input onChange ={handleChange} type="text" placeholder="What's your name?" value = {name}/>
      <button onClick = {handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
