import React from 'react';
import "./Modal.css";

function Modal(props) {
  return (
    <div className='modalOverlay' onClick={props.onOverlay}>
        <div className='modalContent' onClick={(event)=>{event.stopPropagation();}}>
           
        </div>
    </div>
  )
}

export default Modal;
