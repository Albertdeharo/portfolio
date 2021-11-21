import React, {useState} from 'react';
import './../Navbar/navbar.scss';

export default function Navbar(props:any) {
  const [navbar, setNavbar] = useState(true);
  const handleClick = () =>{
    if(navbar == true) {
      setNavbar(false);
    }
    if(navbar == false) {
      setNavbar(true);
    }
  }
  console.log(navbar);
  return <>
    <nav className="navbar">
      <div className="neon-button">
        <a onClick={handleClick}>{navbar == true ? 'ACTIVE':'OFF'}</a>
        <a onClick={handleClick}>{navbar == true ? 'ACTIVE':'OFF'}</a>
        <a onClick={handleClick}>{navbar == true ? 'ACTIVE':'OFF'}</a>
        <a onClick={handleClick}>{navbar == true ? 'ACTIVE':'OFF'}</a>
      </div>
    </nav>
  </>;
}