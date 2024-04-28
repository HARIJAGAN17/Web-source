import React from 'react'
import Header from './components/header/header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import './App.css';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';

function App() {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <ExperienceContainer/>
    </div>
  )
}

export default App;