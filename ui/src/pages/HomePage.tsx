import React, { useState, useEffect } from 'react';

import '../css/basic.css';
import '../css/homepage.css';

import photo from '../assets/photo.png';
import slack from '../assets/slack.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import chess from '../assets/chess.png';

const HomePage: React.FC = (() => {
    const [selectedGame, setSelectedGame] = useState<string>("chess");

    const github_url = "https://github.com/himokkk/";
    const linkedin_url = "https://www.linkedin.com/in/pawe%C5%82-kwieci%C5%84ski-3572881b7/";
    const slack_url = "https://slack.com/";

    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const targetDiv = document.getElementById('socials') as HTMLDivElement;
    const targetPosition = targetDiv.offsetTop;

    if (scrollPosition > targetPosition - 300) {
      setShowDiv(true);
    }
    else {
        setShowDiv(false);
    }
  };

    const switch_game_button = ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const old_content_div = document.getElementById(selectedGame+"-content") as HTMLDivElement;
        old_content_div.style.display = "none";

        const div = event.target as HTMLDivElement;
        const id = div.id.split("-")[0];

        const new_content_div = document.getElementById(id+"-content") as HTMLDivElement;
        new_content_div.style.display = "flex";
        setSelectedGame(id);

        console.log(window.scrollY);
    });

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
            
                    <div className="circle prevent-select float-left">
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

            <div id="projects">
                <div className={showDiv ? 'show-div show' : 'show-div'}>
                    <div className="switch prevention">
                        <div className="switch-button" id="chess-button" onClick={switch_game_button}>Chess</div>
                        <div className="switch-button" id="game1-button" onClick={switch_game_button}>Game1</div>
                        <div className="switch-button" id="game2-button" onClick={switch_game_button}>Game2</div>
                        <div className="switch-button" id="game3-button" onClick={switch_game_button}>Game3</div>
                    </div>
                    
                    <div className="projects-content">
                        <div className="" id="chess-content">
                            <div id="left-chess-content">
                                <img src={ chess } className="chess-logo prevention" alt="Photo"/>
                                <div className="game-text" id="chess-text1">
                                    Chess is a board game of strategic skill for two players, played on a chequered board on which each playing piece is moved according to precise rules. The object is to put the opponent's king under a direct attack from which escape is impossible (checkmate).
                                </div>
                            </div>
                            <div className="vertical-line"></div>
                            <div id="right-chess-content">
                                <div className="game-text" id="chess-text2">
                                In this chess game that I created in Python, you play against a bot programmed with advanced algorithms that make it a formidable opponent. The game followed the classic rules of chess, with the objective being to checkmate the opponent's king.
                                </div>
                                <a href="/#/chess">
                                    <div className="play-button prevention" id="chess-play-button">Play it!</div>
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
        </div>
    )

});

export default HomePage;