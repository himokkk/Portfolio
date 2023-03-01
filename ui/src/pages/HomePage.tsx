import React from "react";

import "../css/basic.css";
import "../css/homepage.css";
import NavBar from "../components/NavBar";

import IntroductionComponent from "../components/IntroductionComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import TechStackComponent from "../components/TechStackComponent";
import TimeLineComponent from "../components/TimeLineComponent";

import slack from "../assets/slack.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import FooterComponent from "../components/FooterComponent";

const HomePage: React.FC = () => {
    return (
        <div className="content clear-both">
            <NavBar />

            <IntroductionComponent />

            {/* <div className="socials prevent-select" id="socials">
                <a className="color-white" href={github_url} rel="noreferrer" target="_blank">
                    <div className="social float-left">
                        <img src={github} className="logo" alt="Github logo" />
                        Github
                    </div>
                </a>
                <a className="color-white" href={linkedin_url} rel="noreferrer" target="_blank">
                    <div className="social float-left">
                        Linked
                        <img src={linkedin} className="linkedin-logo" alt="Linkedin logo" />
                    </div>
                </a>
                <a className="color-white" href={slack_url} rel="noreferrer" target="_blank">
                    <div className="social float-left">
                        <img src={slack} className="logo" alt="Slack logo" />
                        slack
                    </div>
                </a>
            </div> */}
            <ProjectsComponent />
            <TechStackComponent />
            <TimeLineComponent />
            <FooterComponent />
        </div>
    );
};

export default HomePage;
