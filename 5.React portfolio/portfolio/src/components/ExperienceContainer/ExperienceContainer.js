import React from 'react';
import {Element} from 'react-scroll';
import './ExperienceContainer.css';
import ExperienceBox from '../ExperienceBox/ExperienceBox';

function ExperienceContainer() {
  return (
    <Element className='ExperienceContainer' name='ach'>
        <h1>Acheivements</h1>
        <div className='Experience_content'>
        <ExperienceBox title={"What the Hack"} desc={"Winner of the event"}/>
        <ExperienceBox title={"Steam Warrior Hacks"} desc={"Symbol.ai track prize"}/>
        <ExperienceBox title={"Ahoy Hacks"} desc={"Best Use of Google Cloud and Twillio"}/>
        <ExperienceBox title={"Break the Barrier"} desc={"Machine Learning Hack track"}/>
        </div>
    </Element>
  )
}

export default ExperienceContainer;

