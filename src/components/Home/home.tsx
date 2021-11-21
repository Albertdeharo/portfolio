import React, {useState} from 'react';

import Card from '../Card/projects';
import Card2 from '../Card/contact';
import './../Home/home.scss';
import './../Navbar/navbar.scss';


export default function Home(props:any) {
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const showProjects = () =>{
    if(projects == false) {
      setProjects(true);
      setContact(false);
    }
  }
  const showContact = () =>{
    if(contact == false) {
      setContact(true);
      setProjects(false);
    }
  }
  const showHome = () =>{
    if(contact == true || projects == true) {
      setContact(false);
      setProjects(false);
    }
  }
  return <>
    <div className="home-class">
      <nav className="navbar">
        <span className="neon-button"><a onClick={showHome}>Home</a></span>
        <span className="neon-button"><a onClick={showProjects}>Projects</a></span>
        <span className="neon-button"><a onClick={showContact}>Contact</a></span>
      </nav>
      <div className="section">
        <div className="icon"></div>
        <div className="content">
          {projects == true ? <Card/>:''}
          {contact == true ? <Card2/>:''}
        </div>
      </div>
    </div>
  </>;
}