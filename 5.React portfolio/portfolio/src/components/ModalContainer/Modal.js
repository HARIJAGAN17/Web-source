import React from 'react';
import "./Modal.css";
import { useState } from 'react';
import close from "../../assets/close.png";
import send from "../../assets/send.png";

function Modal(props) {

  const[content,setContent] = useState({name:"",email:"",message:""});

  function handleChange(event) {
    
    const {name,value} = event.target;

    setContent((prev)=>{
      return{
        ...prev,[name]:value,
      }
    });

  }

  return (
    <div className='modalOverlay' onClick={()=>{props.onOverlay()}}>
        <div className='modalContent' onClick={(event)=>{event.stopPropagation();}}>
           <form action="">
            <input onChange={handleChange} name="name" placeholder='Name' value={content.name}/>
            <input onChange={handleChange} name="email" placeholder='Email' value={content.email}/>
            <textarea onChange={handleChange} name="message"  placeholder='Your message' rows="5" value={content.message}></textarea>
            <button className='sendButton'><img src={send} alt="send" /> Send</button>
            <button onClick={()=>{props.onOverlay()}} className='formClose'>
              <img src={close} alt="close"/>
            </button>
           </form>
        </div>
    </div>
  )
}

export default Modal;
