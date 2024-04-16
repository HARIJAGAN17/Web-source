import React,{useState} from "react";

function App() {

  const[fullName,setFullname] = useState(
    {
      fname :"",
      lname :"",
    }
  );
  
  function setNames(event) {

    const {value,name} = event.target;
    
    setFullname((prevValue)=>{
      if(name === "fName"){
        return{
          fname: value,
          lname: prevValue.lname,
        }
      }
      else if(name == "lName"){
        return {
          fname: prevValue.fname,
          lname : value,
        }
      }
    });
  }
  

 
  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input onChange={setNames} name="fName" placeholder="First Name" />
        <input onChange={setNames} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
