import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/basic.css';
import '../css/navbar.css';

interface Props {
    homeRef?: React.RefObject<HTMLDivElement>;
    contactRef?: React.RefObject<HTMLDivElement>;
}

const NavBar = ((props: Props) => {
    const navigate = useNavigate();

    const home_scroll = ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(props.homeRef) {
            Scroll(props.homeRef);
        }
        else {
            navigate("/");
        }
    })

    const contact_scroll = ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(props.contactRef) {
            Scroll(props.contactRef);
        } 
        else {
            navigate("/");
        }
    })

    const Scroll = ((ref: React.RefObject<HTMLDivElement>) => {
        const targetElement = ref.current as HTMLDivElement;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: targetPosition,
            behavior: 'instant' as ScrollBehavior,
        });
    })
    return (
        <div className="navbar prevent-select">
            <a href="/">
           <div className="navbar-button float-left" id="nameButton" onClick={home_scroll}>🍊Paweł</div> </a>
           <div className="navbar-button float-left" id="homeButton" onClick={home_scroll}>Home</div> 
           <div className="navbar-button float-left" id="aboutButton">About</div> 
           <div className="navbar-button float-left" id="skillsButton">Skills</div> 
           <div className="navbar-button float-left" id="contactButton" onClick={contact_scroll}>Contact</div>  
           <div className="clear-both"></div>         
        </div>
    )
});

export default NavBar;