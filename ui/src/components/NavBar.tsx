import React from 'react';

import '../css/basic.css';
import '../css/navbar.css';

const NavBar = (() => {
    return (
        <div className="navbar">
           <div className="navbar-button float-left" id="nameButton">🍊Paweł</div> 
           <div className="navbar-button float-left" id="homeButton">Home</div> 
           <div className="navbar-button float-left" id="aboutButton">About</div> 
           <div className="navbar-button float-left" id="skillsButton">Skills</div> 
           <div className="navbar-button float-left" id="contactButton">Contact</div>  
           <div className="clear-both"></div>         
        </div>
    )
});

export default NavBar;