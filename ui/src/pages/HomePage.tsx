import React from 'react';

import '../css/basic.css';
import '../css/homepage.css';

import { BsLinkedin, BsSlack } from 'react-icons/bs';
import photo from '../assets/photo.png';
import slack from '../assets/slack.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const HomePage = (() => {
    const github_url = "https://github.com/himokkk/";
    const linkedin_url = "https://www.linkedin.com/in/pawe%C5%82-kwieci%C5%84ski-3572881b7/";
    const slack_url = "https://slack.com/";

    return (
        <div className="content clear-both">
            <div id="introduction">
                <div className="intruduction-content">
                    <div className="greeting float-left">
                        <h3>Hi, I`m</h3>
                        <h1> Paweł Kwieciński</h1>
                        <hr className="introduction-line float-left"/>
                        <div className="description1"> 
                            I am a student of Computer Science. I have been interested in maths and programming since middle school. 
                        </div>
                    </div>
            
                    <div className="circle float-left">
                        <img src={photo} className="photo float-left" alt="Photo"/>
                    </div>
                    <div className="introduction-right float-left">
                        <h2>Software delevoper</h2>
                        <hr className="introduction-line float-left"/>
                        <div className="description2">
                            Mostly interesed in Python, C++, JavaScript/TypeScript
                        </div>
                        <div className="show-more">show more {"->"}</div>   
                    </div>
                </div>
            </div>
            
            <div className="socials">
                <div className="social float-left">
                    <a className="color-white" href={github_url} target="_blank">
                        <img src={ github } className="logo" alt="Photo"/>
                        Github
                    </a>
                </div>
                <div className="social float-left">
                    <a className="color-white" href={linkedin_url} target="_blank">
                        Linked
                        <img src={ linkedin } className="linkedin-logo" alt="Photo"/>
                    </a>
                </div>
                <div className="social float-left">
                    <a className="color-white" href={slack_url} target="_blank">
                        <img src={ slack } className="logo" alt="Photo"/>
                        slack
                    </a>
                </div>
            </div>

            <div id="project">

            </div>
        </div>
    )

});

export default HomePage;