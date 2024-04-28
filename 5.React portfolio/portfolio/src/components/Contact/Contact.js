import React from 'react';
import { Element } from 'react-scroll';
import './Contact.css';
import git from "../../assets/github.png";
import linked from "../../assets/linked.png";

function Contact() {
  return (
    <Element name='contact' className='contactContainer'>
        <h1> Contact</h1>
        <div className='contactDetails'>
            <p>Email:<span> jaganhari2002@gmail.com</span></p>
            <p>Phone:<span> +91 6382737916</span></p>
            <div className='iconLinks'>
            <a href="https://github.com/HARIJAGAN17" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/harijagan-t-431682219/" target="_blank" rel="noopener noreferrer">
            <img src={linked} alt="linkedin" />
            </a>
        </div>
        </div>

    </Element>
  )
}

export default Contact;