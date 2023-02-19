import React, { useEffect } from 'react';

import '../css/techstack.css';

import python_logo from '../assets/techstack/python-logo.svg';
import python from '../assets/techstack/python.svg';
import react_logo from '../assets/techstack/react-logo.svg';
import react from '../assets/techstack/react.svg';
import { ReactComponent as JavaScriptLogo }  from '../assets/techstack/javascript-logo.svg';
import { ReactComponent as TypeScriptLogo } from '../assets/techstack/typescript-logo.svg';

import CSSLogo from '../assets/techstack/css-logo.svg';
import HTMLLogo from '../assets/techstack/html-logo.svg';
import DjangoLogo from '../assets/techstack/django-logo.svg';
import DockerLogo from '../assets/techstack/docker-logo.svg';
import CppLogo from '../assets/techstack/cpp-logo.svg';
import { constants } from 'fs/promises';

interface Vector {
    x: number;
    y: number;
}

const TechStackComponent = (() => {
    function getRandomColor() {
        const hue = Math.floor(Math.random() * 361);
        const saturation = '70%';
        const lightness = '80%';

        return `hsl(${hue}, ${saturation}, ${lightness})`;
    }
    
    useEffect (() => {
        let Elements = document.getElementsByClassName("randomColor") as HTMLCollectionOf<HTMLDivElement>;
        Array.from(Elements).forEach((element: HTMLDivElement) => {
            var bubbleElement = element.querySelector(".bubble") as HTMLDivElement;
            var secondChildElement1 = bubbleElement.querySelector("span:nth-child(1)")  as HTMLDivElement;
            var secondChildElement2 = bubbleElement.querySelector("span:nth-child(2)")  as HTMLDivElement;
        
            let color = getRandomColor();
            secondChildElement1.style.borderLeftColor = color;
            secondChildElement2.style.borderRightColor = color;
        });
    }, []);

    function randomSpawnPosition(centerPoint: Vector, jar_size: number, bubble_size: number)  {
        let ballPosition: Vector = {
            x: Math.floor(Math.random() * (jar_size - bubble_size - 100)),
            y: Math.floor(Math.random() * (jar_size - bubble_size - 100)) + jar_size / 10,
        }
        let distX = ballPosition.x - centerPoint.x - bubble_size/2;
        let distY = ballPosition.y - centerPoint.y - bubble_size/2;
        while(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)) >= jar_size / 2 - bubble_size / 2) {
            let random = Math.random();
            ballPosition = {
                x: Math.floor(random * (jar_size - bubble_size - 100)),
                y: Math.floor(Math.random() * (jar_size - bubble_size - 100)) + jar_size / 10,
            }
            distX = ballPosition.x - centerPoint.x - bubble_size/2;
            distY = ballPosition.y - centerPoint.y - bubble_size/2;
            
        }
        return ballPosition;
    }

    function calculateNewVelocity(ballPosition: Vector, ballRadius: number, centerPoint: Vector, circleRadius: number, velocity: Vector): Vector {
        const normalVector = { x: ballPosition.x - centerPoint.x, y: ballPosition.y - centerPoint.y };
        const normalMagnitude = Math.sqrt(normalVector.x * normalVector.x + normalVector.y * normalVector.y);
        const normalizedNormalVector = { x: normalVector.x / normalMagnitude, y: normalVector.y / normalMagnitude };
        const dotProduct = velocity.x * normalizedNormalVector.x + velocity.y * normalizedNormalVector.y;
        const reflectedVelocity = { x: velocity.x - 2 * dotProduct * normalizedNormalVector.x, y: velocity.y - 2 * dotProduct * normalizedNormalVector.y };
        
        return { x: parseFloat(reflectedVelocity.x.toFixed(4)), y: parseFloat(reflectedVelocity.y.toFixed(4))};
    }

    function getClosestBallPositionOnCircle(
        ballPosition: Vector,
        ballVelocity: Vector,
        circle: Vector,
        radius: number
      ) {
        // Calculate distance from center of the circle to current position of the ball
        const distance = Math.sqrt(
          Math.pow(ballPosition.x - circle.x, 2) + Math.pow(ballPosition.y - circle.y, 2)
        );
      
        // Calculate the distance between the current position and intersection point
        const distanceToIntersection = radius - distance;
        
        // Calculate the time it takes for the ball to reach the intersection point
        const timeToIntersection = distanceToIntersection / Math.sqrt(
          Math.pow(ballVelocity.x, 2) + Math.pow(ballVelocity.y, 2)
        );
      
        // Calculate the new position of the ball at the intersection point
        const newBallPosition = {
          x: ballPosition.x + ballVelocity.x * timeToIntersection,
          y: ballPosition.y + ballVelocity.y * timeToIntersection,
        };
      
        return newBallPosition;
      }
      

    useEffect (() => {
        let jar = document.getElementById("jar") as HTMLDivElement;

        let bubbles = document.getElementsByClassName("randomColor") as HTMLCollectionOf<HTMLDivElement>;
        let i = 0;
        
        const vel = [6, 3, -6, -3];

        Array.from(bubbles).forEach((bubble: HTMLDivElement) => {
            const jar_size = jar.offsetHeight;
            const bubble_size = bubble.offsetHeight;
            const centerPoint = { x: jar_size/2, y: jar_size/2 }; 

            let position: Vector = randomSpawnPosition(centerPoint, jar_size, bubble_size);
            
            bubble.style.top = "100" + "px";
            bubble.style.left = "100" + "px" ;
            i+=1;

            let velocity = {
                x:  1,
                y:  1,
            }
            let j=0;
            function moveBubble() {
                j+=1;
                let topPosition = parseFloat(bubble.style.top);
                let leftPosition = parseFloat(bubble.style.left);       
            
                let ballPosition = { x: leftPosition + bubble_size/2, y: topPosition + bubble_size/2};
                 
                const distX = ballPosition.x - centerPoint.x;
                const distY = ballPosition.y - centerPoint.y;

                if (Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)) >= jar_size / 2 - bubble_size / 2) {
                    let xd = getClosestBallPositionOnCircle(ballPosition, velocity, centerPoint, jar_size / 2);
                    //console.log(getClosestBallPositionOnCircle(ballPosition, velocity, centerPoint, jar_size / 2), ballPosition, velocity);
                    const newVelocity = calculateNewVelocity(
                        ballPosition, 
                        bubble_size / 2, 
                        centerPoint, 
                        jar_size / 2, 
                        velocity); 
                    //leftPosition -= velocity.x/5;
                    //topPosition -= velocity.y/5;
                    console.log(j, leftPosition, topPosition, jar_size / 2 - bubble_size / 2, velocity, newVelocity, Math.sqrt(Math.pow(distX+newVelocity.x, 2) + Math.pow(distY+newVelocity.y, 2)));
                    velocity = newVelocity;                 
                }
                leftPosition += velocity.x;
                topPosition += velocity.y;
                
                bubble.style.top = topPosition + 'px';
                bubble.style.left = leftPosition + 'px';

                const fps = 60;
                setTimeout(() => {   
                    requestAnimationFrame(moveBubble);
                }, 1000/fps);
            }

            requestAnimationFrame(moveBubble);
        });
      }, []);
      
    return (
        <div className="stack-content">
            <div className="flex">
                <div className="col1">
                    <div id="python-circle">
                        <img src={ python_logo } className="python-logo" alt="Photo"/>
                        <img src={ python } className="python" alt="Photo"/>
                    </div>
                    <div id="python-stack">

                        <div className="bubble-container" id="django-bubble">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                                <div>
                                    <img src={ DjangoLogo } id="django-logo" alt="Photo"/>
                                </div>
                            </div>
                        </div>

                        <div className="bubble-container" id="docker-bubble">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                                <div>
                                    <img src={ DockerLogo } id="docker-logo" alt="Photo"/>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>

                <div className="col2">
                    <div className="flex">
                        <div className="bubble-container" id="react-bubble">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                                <div className="column flex" id="react-logo">
                                    <img src={ react_logo } alt="Photo"/>
                                    <img src={ react } alt="Photo"/>
                                </div>
                            </div>
                        </div>
                        <div id="front-stack-1">
                            <div className="bubble-container" id="css-bubble">
                                <div className="bubble">
                                    <span></span>
                                    <span></span>
                                    <div>
                                        <img src={ CSSLogo } id="css-logo" alt="Photo"/>
                                        <h3>CSS</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="bubble-container" id="html-bubble">
                                <div className="bubble">
                                    <span></span>
                                    <span></span>
                                    <div>
                                        <img src={ HTMLLogo } id="html-logo" alt="Photo"/>
                                        <h3>HTML</h3> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="front-stack-2">
                        <div className="bubble-container" id="ts-bubble">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                                <div>
                                    <TypeScriptLogo id="ts-logo"/>
                                </div>
                            </div>
                        </div>

                        <div className="bubble-container" id="js-bubble">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                                <div> 
                                <JavaScriptLogo  id="js-logo"/>
                                </div>
                            </div>
                        </div>

                    </div>  
                </div>

                <div className="bubble-container" id="cpp-bubble">
                    <div className="bubble">
                        <span></span>
                        <span></span>
                        <div>
                            <img src={ CppLogo } id="cpp-logo" alt="Photo"/>
                        </div>
                    </div>
                </div>
                
            </div>           
            
            <div id="jar">
                <div className="absolute" id="jar-container">
                    <div className="jar-row" id="jar-row-1">
                        <div className="bubble-container randomColor">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                            </div>
                        </div>


                        
                    </div>

                    {/* <div className="jar-row"  id="jar-row-2">
                        <div className="bubble-container randomColor">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className="bubble-container randomColor">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className="bubble-container randomColor">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className="bubble-container randomColor">
                            <div className="bubble">
                                <span></span>
                                <span></span>
                                <div className="liquid"></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="x"></div>
            
        </div>
    )
})

export default TechStackComponent;