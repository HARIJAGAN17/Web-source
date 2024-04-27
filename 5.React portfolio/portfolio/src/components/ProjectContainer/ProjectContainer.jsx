import React from 'react';
import { Element } from 'react-scroll';
import './ProjectContainer.css';
import Project from '../Project/Project';
import './ProjectContainer.css';
import projects from './Project_content';




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
