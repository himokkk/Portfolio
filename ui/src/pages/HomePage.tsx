import React, { useState, useEffect } from 'react';

import '../css/basic.css';
import '../css/homepage.css';

import IntroductionComponent from '../components/IntroductionComponent';
import ProjectsComponent from '../components/ProjectsComponent';

import slack from '../assets/slack.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const HomePage: React.FC = (() => {
    const github_url = "https://github.com/himokkk/";
    const linkedin_url = "https://www.linkedin.com/in/pawe%C5%82-kwieci%C5%84ski-3572881b7/";
    const slack_url = "https://slack.com/";

    return (
        <div className="content clear-both">
            <div id="introduction">
                <IntroductionComponent/>
            </div>

            <div>
                <div className="socials prevent-select" id="socials">
                <a className="color-white" href={github_url} target="_blank">
                    <div className="social float-left">
                        <img src={ github } className="logo" alt="Photo"/>
                        Github
                    </div>
                    </a>
                    <a className="color-white" href={linkedin_url} target="_blank">
                        <div className="social float-left">
                            Linked
                            <img src={ linkedin } className="linkedin-logo" alt="Photo"/>
                        </div>
                    </a>
                    <a className="color-white" href={slack_url} target="_blank">
                        <div className="social float-left">
                            <img src={ slack } className="logo" alt="Photo"/>
                            slack   
                        </div>
                    </a>
                </div>
            </div>

            <div id="projects">
               <ProjectsComponent/>
            </div>

            <div id="Contact">
                x
            </div>
        </div>
    )
});

export default HomePage;