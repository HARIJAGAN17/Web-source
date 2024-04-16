import React, { useState } from "react";

function CreateArea(props) {

  const[inputText,setInputText] = useState({title:"",content:""});
  
  function handleChange(event){
    const {value,name} = event.target;

    setInputText((prev)=>{
      if(name === "title"){
        return {
          title : value,
          content : prev.content
        }
      }else if(name === "content"){
        return{
          title: prev.title,
          content:value,
        }
      }
    })
  }

 
  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputText.content} />
        <button onClick={()=>{
          props.onAdd(inputText);
          setInputText({title:"",content:""})
          }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
