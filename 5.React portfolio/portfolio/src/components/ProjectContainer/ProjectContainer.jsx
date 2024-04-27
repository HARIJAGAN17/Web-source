import React from 'react';
import { Element } from 'react-scroll';
import './ProjectContainer.css';
import medzone from '../../assets/medzone.jpg'
import dodgemine from '../../assets/Dodgemine.png'
import fitness from '../../assets/fitnesszone.jpg';
import Project from '../Project/Project';
import './ProjectContainer.css';

const projects = [
    {
        image:medzone,
        title:"Med-Zone",
        desc:"An accessible personal healthcare web app that uses PoseNet, React, Socket.io, and TensorFlow to let users consult doctors online.",
        link:"https://devpost.com/software/med-zone-q0uwor",
    },
    {
        image:dodgemine,
        title:"Dodge-Mine",
        desc:"A machine learning-powered website application that uses HTML, CSS, JS, and Twilio to detect mine sweepers in the route of sailors.",
        link:"https://devpost.com/software/dodge-mine",
    },
    {
        image:fitness,
        title:"Fitness-Zone",
        desc:"A machine learning-powered web app that uses Google Cloud, Mediapipe, and Python to track your fitness and send you workout reminders via Twilio and Linode APIs.",
        link:"https://devpost.com/software/fitness-zone-9um05f",
    },
    {
        image:fitness,
        title:"Fitness-Zone",
        desc:"A machine learning-powered web app that uses Google Cloud, Mediapipe, and Python to track your fitness and send you workout reminders via Twilio and Linode APIs.",
        link:"https://devpost.com/software/fitness-zone-9um05f",
    },
    {
        image:fitness,
        title:"Fitness-Zone",
        desc:"A machine learning-powered web app that uses Google Cloud, Mediapipe, and Python to track your fitness and send you workout reminders via Twilio and Linode APIs.",
        link:"https://devpost.com/software/fitness-zone-9um05f",
    },
   
]


function ProjectContainer() {
  return (
    <Element name='projects' className='ProjectContainer'>
        <h1>Projects</h1>
        <p>Take a look at my projects</p>
        <div className='projectBox'>
         {
            projects.map((project,index)=>{
                
                return <Project key={index} link={project.link} desc={project.desc} title={project.title} image = {project.image}/>
            })
         }
        </div>
    </Element>    
  )
}

export default ProjectContainer;