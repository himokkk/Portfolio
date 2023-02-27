import React, { useState, useEffect } from "react";

import "../css/projects.css";

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
                <div className="switch prevention">
                    <div className="switch-button" id="chess-button" onClick={switch_game_button}>
                        Chess
                    </div>
                    <div className="switch-button" id="game1-button" onClick={switch_game_button}>
                        Game1
                    </div>
                    <div className="switch-button" id="game2-button" onClick={switch_game_button}>
                        Game2
                    </div>
                    <div className="switch-button" id="game3-button" onClick={switch_game_button}>
                        Game3
                    </div>
                </div>

                <div className="projects-content">
                    <div className="" id="chess-content">
                        <div id="left-chess-content">
                            <img src={chess} className="chess-logo prevention" alt="chess-logo" />
                            <div className="game-text" id="chess-text1">
                                Chess is a board game of strategic skill for two players, played on a chequered board on
                                which each playing piece is moved according to precise rules. The object is to put the
                                opponent's king under a direct attack from which escape is impossible (checkmate).
                            </div>
                        </div>
                        <div className="vertical-line"></div>
                        <div id="right-chess-content">
                            <div className="game-text" id="chess-text2">
                                In this chess game that I created in Python, you play against a bot programmed with
                                advanced algorithms that make it a formidable opponent. The game followed the classic
                                rules of chess, with the objective being to checkmate the opponent's king.
                            </div>
                            <a href="/chess">
                                <div className="play-button prevention" id="chess-play-button">
                                    Play it!
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="invisible" id="game1-content">
                        Game content 1
                    </div>

                    <div className="invisible" id="game2-content">
                        Game content 2
                    </div>

                    <div className="invisible" id="game3-content">
                        Game content 3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsComponent;
