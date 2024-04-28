import './TopContent.css';

import React from 'react'
import {Link} from 'react-scroll'

function TopContent() {
  return (
    <div className='topContent'>
        <div className='topContent_container'>
            <h1> HARIJAGAN</h1>
            <p>A Professional Web and App Developer</p>
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1gxtfnQ7h73hSRxbrZbWVPQblOtxCuzi0&export=download">
                <button className='downloadButoon'>Download CV</button>
            </a>
            <Link to='projects' smooth='true' duration={500}>
                <button className="myworkButton">
                    My Works
                </button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent;