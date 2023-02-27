import React, { useState, useEffect } from "react";

import "../css/projects.css";

import { BsArrowUpRight, BsBoxArrowUpRight } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImArrowUpRight } from "react-icons/im";

import chess from "../assets/chess.png";

const ProjectsComponent: React.FC = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [selectedGame, setSelectedGame] = useState<string>("chess");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const targetDiv = document.getElementById("projects") as HTMLDivElement;
        const targetPosition = targetDiv.offsetTop;

        if (scrollPosition > targetPosition - 500) {
            console.log("x");
            setShowDiv(true);
        } else {
            setShowDiv(false);
        }
    };

    const switch_game_button = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const old_content_div = document.getElementById(selectedGame + "-content") as HTMLDivElement;
        old_content_div.style.display = "none";

        const div = event.target as HTMLDivElement;
        const id = div.id.split("-")[0];

        const new_content_div = document.getElementById(id + "-content") as HTMLDivElement;
        new_content_div.style.display = "flex";
        setSelectedGame(id);
    };

    return (
        <div className="projects prevent-select">
            <div className={showDiv ? "show-div show" : "show-div"} id="projects-main">
                <div id="projects-header">
                    <h1>Projects</h1>
                    <AiOutlineFundProjectionScreen id="projects-logo" />
                    <div className="projects-description">I created my own projects.</div>
                </div>
                <div className="vertical-line"></div>
                <div className="projects-content">
                    <div className="project-content">
                        <div className="project-header">
                            <div className="project-title"> Chess</div>
                            <div className="annotation-link">
                                <ImArrowUpRight className="arrow" />
                            </div>
                        </div>
                        <div className="project-description-container">
                            <div className="project-description">
                                In this chess game that I created in Python, you play against a bot programmed with
                                advanced algorithms that make it a formidable opponent. The game followed the classic
                                rules of chess, with the objective being to checkmate the opponent's king.
                            </div>
                            <div className="learn-more">Learn more</div>
                        </div>
                        <hr className="horizontal-line" />
                    </div>

                    <div className="project-content">
                        <div className="project-header">
                            <div className="project-title"> Chess</div>
                            <div className="annotation-link">
                                <ImArrowUpRight className="arrow" />
                            </div>
                        </div>
                        <div className="project-description-container">
                            <div className="project-description">
                                In this chess game that I created in Python, you play against a bot programmed with
                                advanced algorithms that make it a formidable opponent. The game followed the classic
                                rules of chess, with the objective being to checkmate the opponent's king.
                            </div>
                            <div className="learn-more">Learn more</div>
                        </div>
                        <hr className="horizontal-line" />
                    </div>

                    <div className="project-content">
                        <div className="project-header">
                            <div className="project-title"> Chess</div>
                            <div className="annotation-link">
                                <ImArrowUpRight className="arrow" />
                            </div>
                        </div>
                        <div className="project-description-container">
                            <div className="project-description">
                                In this chess game that I created in Python, you play against a bot programmed with
                                advanced algorithms that make it a formidable opponent. The game followed the classic
                                rules of chess, with the objective being to checkmate the opponent's king.
                            </div>
                            <div className="learn-more">Learn more</div>
                        </div>
                        <hr className="horizontal-line" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsComponent;
