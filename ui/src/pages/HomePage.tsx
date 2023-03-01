import React from "react";

import "../css/basic.css";
import "../css/homepage.css";

import NavBar from "../components/NavBar/NavBarComponent";
import Introduction from "../components/Introduction/IntroductionComponent";
import Projects from "../components/Projects/ProjectsComponent";
import TechStack from "../components/TechStack/TechStackComponent";
import TimeLine from "../components/TimeLine/TimeLineComponent";
import Footer from "../components/Footer/FooterComponent";

const HomePage: React.FC = () => {
    return (
        <div className="content clear-both">
            <NavBar />
            <Introduction />
            <Projects />
            <TechStack />
            <TimeLine />
            <Footer />
        </div>
    );
};

export default HomePage;
