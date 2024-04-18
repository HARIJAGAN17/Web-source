import React from 'react';
import './navbar.css';
import logo from "../../assets/idea.png"
import {Link} from "react-scroll";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Navbar = () => {
  return (
   <nav className="navbar">
    <img src={logo} alt="logo" className='logo' />
    <div className="desktopMenu">
        <Link className='desktopmenulistitem'>Home</Link>
        <Link className='desktopmenulistitem'>About</Link>
        <Link className='desktopmenulistitem'>Portfolio</Link>
        <Link className='desktopmenulistitem'>Clients</Link>
    </div>
    <button className="desktopMenuBtn">
    <ImportContactsIcon className='desktopMenuIcon'/>
        Contanct Me
    </button>

    </nav>
  )
}

export default Navbar