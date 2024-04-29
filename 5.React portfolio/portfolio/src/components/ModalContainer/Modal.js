import React from 'react';
import "./Modal.css";
import { useState } from 'react';
import close from "../../assets/close.png";
import send from "../../assets/send.png";

function Modal(props) {

  const [content, setContent] = useState({ name: "", email: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      }
    });
  }

  function checkWork(event) {
    event.preventDefault(); // Prevent form submission
    console.log(content);
    setContent({ name: "", email: "", message: "" });
  }

  return (
    <div className='modalOverlay' onClick={() => { props.onOverlay() }}>
      <div className='modalContent' onClick={(event) => { event.stopPropagation(); }}>
        <form onSubmit={checkWork}> {/* Use onSubmit event */}
          <div className='inputBox'>
          <h2>Name <span>*</span></h2>
          <input onChange={handleChange} name="name" placeholder='Name' value={content.name} />
          </div>
          <div className='inputBox'>
          <h2>E-mail <span>*</span></h2>
          <input onChange={handleChange} name="email" placeholder='Email' value={content.email} />
          </div>
          <textarea onChange={handleChange} name="message" placeholder='Your message' rows="5" value={content.message}></textarea>
          <button onClick={() => { props.onOverlay() }} className='formClose'>
            <img src={close} alt="close" />
          </button>
          <button type="submit" className='sendButton'><img src={send} alt="send" /> Send</button>
        </form>
      </div>
    </div>
  )
}

export default Modal;
