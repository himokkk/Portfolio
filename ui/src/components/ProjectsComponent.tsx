import React, { useState, useEffect } from "react";

import "../css/projects.css";

import { BsArrowUpRight } from "react-icons/bs";

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
            <div className={showDiv ? "show-div show" : "show-div"}>
                <div className="project-content" id="chess-text2">
                    <div className="project-header">
                        <div className="title"> Chess</div>
                        <BsArrowUpRight />
                    </div>
                    <div className="projects-description">
                        In this chess game that I created in Python, you play against a bot programmed with advanced
                        algorithms that make it a formidable opponent. The game followed the classic rules of chess,
                        with the objective being to checkmate the opponent's king.
                        <a href="/chess">
                            <div className="play-button prevention" id="chess-play-button">
                                Play it!
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsComponent;
