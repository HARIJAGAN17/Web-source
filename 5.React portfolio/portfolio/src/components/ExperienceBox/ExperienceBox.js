import React from 'react';
import './ExperienceBox.css';

function ExperienceBox(props) {
  return (
    <div class="myview">
    <h4>{props.title}</h4>
    <p>{props.desc}</p>
    </div>
  )
}

export default ExperienceBox;