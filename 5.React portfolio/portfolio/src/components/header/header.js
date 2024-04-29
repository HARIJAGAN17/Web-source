import React, { useState } from 'react';
import {Link} from 'react-scroll';
import './header.css'
import Modal from '../ModalContainer/Modal';

function Header() {

  const[showModel,setModel] = useState(false);

  function handleModel(){
     setModel(!showModel);
  }

  return (
    <div className='header'>
        
        <Link to='about' smooth='true' duration={700} className='header_left'>
        <h1>Develop<span>er</span></h1>
        </Link>
        
        <div className='header_right'>
            <Link to='about' smooth='true' duration={700}>
            <h4>About</h4>
            </Link>
            <Link to='skills' smooth='true' duration={700}>
            <h4>Skills</h4>
            </Link>
            <Link to='projects' smooth='true' duration={700}>
            <h4>Projects</h4>
            </Link>
            <Link to='ach' smooth='true' duration={700}>
            <h4>Acheivements</h4>
            </Link>
            <Link to='contact' smooth='true' duration={700}>
            <h4>Contact</h4>
            </Link>
            <h4 className='header_right_button' onClick={()=>{handleModel()}}>Join me</h4>
            {showModel&& <Modal onOverlay={()=>{handleModel()}}/>}
        </div>
    </div>
  )
}

export default Header;