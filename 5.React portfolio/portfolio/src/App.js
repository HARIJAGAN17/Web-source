import React from 'react'
import Header from './components/header/header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import './App.css';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast.success('message sent', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  const second = () => toast.warn('Please fill the details properly', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

  return (
    <div>
      <Header toastFunction ={notify} notToastFunction={second}/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <ExperienceContainer/>
      <Contact/>
      <ToastContainer />
    </div>
  )
}

export default App;