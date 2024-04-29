import React from 'react';
import "./Modal.css";
import { useState } from 'react';
import close from "../../assets/close.png";
import send from "../../assets/send.png";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Modal(props) {

  const [content, setContent] = useState({ name: "", email: "", message: "" });
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setContent({name:"",email:"",message:""});
  };


  function handleChange(event) {
    const { name, value } = event.target;
    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      }
    });
  }

  // function checkWork(event) {
  //   event.preventDefault(); // Prevent form submission
  //   console.log(content);
  //   setContent({ name: "", email: "", message: "" });
  // }

  return (
    <div className='modalOverlay' onClick={() => { props.onOverlay() }}>
      <div className='modalContent' onClick={(event) => { event.stopPropagation(); }}>
        <form onSubmit={sendEmail} ref={form} > {/* Use onSubmit event */}
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
