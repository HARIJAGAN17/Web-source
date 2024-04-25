import React from 'react';
import './SkillContainer.css';
import { Element } from 'react-scroll';
import java from '../../assets/java.png';
import dart from '../../assets/dart.png';
import flutter from '../../assets/flutter.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';
import c2 from '../../assets/c2.png';
import sql from '../../assets/sql.png';


function SkillContainer() {
  return (
    <Element name='skills'> 
    <div className='skillContainer'>
       <div className='imageContainer'>
       <img src={c2} alt="computer" />
       </div>
       <div className='skiller'>
        <h1>Skills</h1>
       <div className='skillset'>
        <div className='box'>
            <h1>Java</h1>
            <img src={java} alt="Java"/>
        </div>
        <div className='box'>
            <h1>HTML</h1>
            <img src={html} alt="Java"/>
        </div>
        <div className='box'>
            <h1>CSS</h1>
            <img src={css} alt="Java"/>
        </div>
        <div className='box'>
            <h1>JavaScript</h1>
            <img src={js} alt="Java"/>
        </div>
        <div className='box'>
            <h1>NodeJs</h1>
            <img src={nodejs} alt="Java"/>
        </div>
        <div className='box'>
            <h1>React</h1>
            <img src={react} alt="Java"/>
        </div>
        <div className='box'>
            <h1>Dart</h1>
            <img src={dart} alt="Java"/>
        </div>
        <div className='box'>
            <h1>Flutter</h1>
            <img src={flutter} alt="Java"/>
        </div>
        <div className='box'>
            <h1>PostgreSql</h1>
            <img src={sql} alt="Java"/>
        </div>
       </div>
       </div>
    </div>   
    </Element>    
  )
}

export default SkillContainer;