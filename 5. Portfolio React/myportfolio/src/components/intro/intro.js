import React from 'react'
import './intro.css';
import robo from '../../assets/robot.gif'
import { Link } from 'react-scroll';
import WorkIcon from '@mui/icons-material/Work';

function Intro() {
  return (
    <section id="intro">
      <div className="intro">
      <span className="hello">Hello,</span>
      <span className="introText">I'm <span className="introName">Harijagan</span><br />A Developer</span>
      <p className="introPara"> I transform ideas into digital solutions that enhance user experiences and drive business success</p>
      <Link><button className="btn">
        <WorkIcon/>
        Hire Me</button></Link>
      </div>
      <img src={robo} alt="Arc-reactor" className='bg' />
    </section>
  )
}

export default Intro;