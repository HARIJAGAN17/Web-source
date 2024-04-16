import React,{useState} from "react";

function App() {
 
  const [task,setTask] = useState("");
  const [items,setItems] = useState([]);
  
  function handlingTask(event) {
    const {value} = event.target;
    setTask(value);
  }
  
  function addTask(){
    setItems((prevValue)=>{
      return [...prevValue,task];
    })
    setTask("");
  }
  
  // const check = ["asd","2","vfbfgf"]; check purpose

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlingTask} type="text" value ={task} />
        <button onClick={addTask}  >
          <span >Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((content)=>{
            return <li> {content}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
