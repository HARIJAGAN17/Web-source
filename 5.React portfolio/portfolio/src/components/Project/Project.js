import React, { useState } from 'react'
import  './Project.css'

function Project(props) {
  const[show,setShow] = useState(false);

  return (
    <a href={props.link}>
        <div className='projectCard' onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
    
    {show ? (<div className='project_details'>
               <h4>{props.title}</h4>
               <p>{props.desc}</p>
           </div>) : (<img src={props.image} alt='source'></img>)}
        </div>
    </a>
  )
}

export default Project;