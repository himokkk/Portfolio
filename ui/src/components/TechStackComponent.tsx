// import React, { useEffect, useRef } from "react";

import "../css/techstack.css";

import python_logo from "../assets/techstack/python-logo.svg";
import python from "../assets/techstack/python.svg";
import react_logo from "../assets/techstack/react-logo.svg";
import react from "../assets/techstack/react.svg";
// import { ReactComponent as JavaScriptLogo } from "../assets/techstack/javascript-logo.svg";
// import { ReactComponent as TypeScriptLogo } from "../assets/techstack/typescript-logo.svg";

// import CSSLogo from "../assets/techstack/css-logo.svg";
// import HTMLLogo from "../assets/techstack/html-logo.svg";
// import Django from '../assets/techstack/django-logo.svg';
// import DjangoLogo from "../assets/techstack/django.png";
import DockerLogo from "../assets/techstack/docker-logo.svg";
import CppLogo from "../assets/techstack/cpp-logo.svg";

// interface Vector {
//   x: number;
//   y: number;
// }

// interface Ball {
//   x: number;
//   y: number;
//   radius: number;
// }

const TechStackComponent = () => {
  // const bubbleRef = useRef(null);

  // const getRandomColor = (): string => {
  //   const hue = Math.floor(Math.random() * 361);
  //   const saturation = '100%';
  //   const lightness = '50%';

  //   return `hsl(${hue}, ${saturation}, ${lightness})`;
  // }

  // useEffect(() => {
  //   const bubbles_count = 20;
  //   if (bubbleRef.current) {
  //     const bubbleDiv = bubbleRef.current as HTMLDivElement;
  //     for(let i=0; i < bubbles_count; i++) {
  //       const clonedDiv = bubbleDiv.cloneNode(true) as HTMLDivElement;
  //       bubbleDiv.parentNode?.insertBefore(clonedDiv, bubbleDiv.nextSibling);
   
  //       const bubbleElement = clonedDiv.querySelector(".bubble") as HTMLDivElement;
  //       const secondChildElement1 = bubbleElement.querySelector(
  //         "span:nth-child(1)"
  //       ) as HTMLDivElement;
  //       const secondChildElement2 = bubbleElement.querySelector(
  //         "span:nth-child(2)"
  //       ) as HTMLDivElement;
  
  //       let color = getRandomColor();
  //       secondChildElement1.style.borderTopColor = color;
  //       secondChildElement1.style.borderLeftColor = color;
  //       secondChildElement2.style.borderRightColor = color;
  //       secondChildElement2.style.borderBottomColor = color;
  //     }
  //   }

  //   const elements = document.getElementsByClassName(
  //     "randomColor"
  //   ) as HTMLCollectionOf<HTMLDivElement>;
  //   Array.from(elements).forEach((element: HTMLDivElement) => {
     
  //   });
  // }, []);

  // const randomSpawnPosition = (centerPoint: Ball, bubble_size: number): Vector => {
  //   let ballPosition: Vector = {
  //     x: Math.floor(Math.random() * (centerPoint.radius * 2 - bubble_size)),
  //     y: Math.floor(Math.random() * (centerPoint.radius * 3/4 - bubble_size) + centerPoint.radius * 4/3),
  //   };
  //   let distX = ballPosition.x + bubble_size / 2 - centerPoint.x;
  //   let distY = ballPosition.y + bubble_size / 2 - centerPoint.y;

  //   while (
  //     Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)) >=
  //     centerPoint.radius - bubble_size / 2
  //   ) {
  //     ballPosition = {
  //       x: Math.floor(Math.random() * (centerPoint.radius * 2 - bubble_size)),
  //       y: Math.floor(Math.random() * (centerPoint.radius * 3/4 - bubble_size) + centerPoint.radius * 4/3),
  //     };
  //     distX = ballPosition.x + bubble_size / 2 - centerPoint.x;
  //     distY = ballPosition.y + bubble_size / 2 - centerPoint.y;
  //   }

  //   return ballPosition;
  // };

  // const calculateNewVelocity = (
  //   ballPosition: Vector,
  //   centerPoint: Vector,
  //   velocity: Vector
  // ): Vector => {
  //   const normalVector = {
  //     x: ballPosition.x - centerPoint.x,
  //     y: ballPosition.y - centerPoint.y,
  //   };
  //   const normalMagnitude = Math.sqrt(
  //     normalVector.x * normalVector.x + normalVector.y * normalVector.y
  //   );
  //   const normalizedNormalVector = {
  //     x: normalVector.x / normalMagnitude,
  //     y: normalVector.y / normalMagnitude,
  //   };
  //   const dotProduct =
  //     velocity.x * normalizedNormalVector.x +
  //     velocity.y * normalizedNormalVector.y;
  //   const reflectedVelocity = {
  //     x: velocity.x - 2 * dotProduct * normalizedNormalVector.x,
  //     y: velocity.y - 2 * dotProduct * normalizedNormalVector.y,
  //   };

  //   return reflectedVelocity;
  // };

  // const getCorrectiveVector = (
  //   ball: Ball,
  //   ballVelocity: Vector,
  //   circle: Ball
  // ): Vector => {
  //   const distance = Math.sqrt(
  //     Math.pow(ball.x - circle.x, 2) + Math.pow(ball.y - circle.y, 2)
  //   );

  //   const distanceToIntersection = distance - circle.radius + ball.radius;

  //   const timeToIntersection =
  //     distanceToIntersection /
  //     Math.sqrt(Math.pow(ballVelocity.x, 2) + Math.pow(ballVelocity.y, 2));

  //   const correctiveVector = {
  //     x: ballVelocity.x * timeToIntersection,
  //     y: ballVelocity.y * timeToIntersection,
  //   };
  //   return correctiveVector;
  // };

  // useEffect(() => {
  //   let jar = document.getElementById("jar") as HTMLDivElement;
  //   let bubbles = document.getElementsByClassName(
  //     "randomColor"
  //   ) as HTMLCollectionOf<HTMLDivElement>; 
    
  //   Array.from(bubbles).forEach((bubble: HTMLDivElement) => {
  //     const jar_size = jar.offsetHeight;
  //     const bubble_size = bubble.offsetHeight;
  //     const centerPoint: Ball = {
  //       x: jar_size / 2,
  //       y: jar_size / 2,
  //       radius: jar_size / 2,
  //     };
  //     const position: Vector = randomSpawnPosition(centerPoint, bubble_size);
      
  //     bubble.style.left = position.x.toString() + "px";
  //     bubble.style.top = position.y.toString() + "px";

  //     const randomSign = Math.random() < 0.5 ? -1 : 1;
  //     const speed = 30;
  //     let velocity = {
  //       x: Math.floor(Math.random() * speed) * randomSign,
  //       y: 0,
  //     };
  //     velocity.y = Math.sqrt(Math.pow(speed, 2) - Math.pow(velocity.x, 2)) * -1;
  //     let timeCounter = 0;
  //     const moveBubble = () => {
  //       timeCounter += 1;
  //       let topPosition = parseFloat(bubble.style.top);
  //       let leftPosition = parseFloat(bubble.style.left);

  //       leftPosition += velocity.x;
  //       topPosition += velocity.y;
  //       let ballPosition: Ball = {
  //         x: leftPosition + bubble_size / 2,
  //         y: topPosition + bubble_size / 2,
  //         radius: bubble_size / 2,
  //       };

  //       const distX = ballPosition.x - centerPoint.x;
  //       const distY = ballPosition.y - centerPoint.y;

  //       if (
  //         Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)) >=
  //         jar_size / 2 - bubble_size / 2
  //       ) {
  //         const correctiveVector: Vector = getCorrectiveVector(
  //           ballPosition,
  //           velocity,
  //           centerPoint
  //         );

  //         leftPosition -= correctiveVector.x;
  //         topPosition -= correctiveVector.y;
  //         const newVelocity = calculateNewVelocity(
  //           ballPosition,
  //           centerPoint,
  //           velocity
  //         );
  //         velocity = newVelocity;
  //       }
  //       bubble.style.top = topPosition + "px";
  //       bubble.style.left = leftPosition + "px";

  //       const fps = 60;
        
  //       const timeToDraw = 5; // time in seconds
  //       if(timeCounter === timeToDraw * fps) {
  //         console.log("XDDD");
  //       }

  //       setTimeout(() => {
  //         requestAnimationFrame(moveBubble);
  //       }, 1000 / fps);
  //     };
  //     setTimeout(() => {
  //       //requestAnimationFrame(moveBubble);
  //     }, 200);
  //   });
  // }, []);

  return (
    <div className="stack-content">
      <h1>My Tech Stack:</h1>
      <div className="stacks">
        <div className="stack"  id="python-stack">
          <img src={python_logo} className="logo"  id="python-logo" alt="Python logo"/>
          <img src={python} className="name" id="python-name" alt="Python name"/>
          <div className="hidden">
            - Django REST framework<br/> 
            - Flask<br/>
          </div>
        </div>
        <div className="stack" id="react-stack">
          <img src={react_logo} className="logo" id="react-logo" alt="React logo"/>
          <img src={react} className="name" id="react-name" alt="React name"/>
          <div className="hidden">
            <div>
              - JavaScript<br/>
              - TypeScript<br/>
              - CSS<br/>
            </div>
          </div>
        </div>
        <div className="stack" id="docker-stack"> 
          <img src={DockerLogo} className="logo" id="docker-logo" alt="Docker logo" />
          <div className="hidden">
            - Docker<br/>
            - Docker-compose<br/>
            - PostgreSQL<br/> 
          </div>
        </div>        
        <div className="stack" id="cpp-stack">
          <img src={CppLogo} className="logo" id="cpp-logo" alt="Cpp logo" />
          <div className="name" id="cpp-name">Cpp</div>
          <div className="hidden">
            - Academic level<br/>
          </div>
        </div>
      </div>

      {/* <div className="jar-container">
        <div id="jar">
          <div className="absolute" id="jar-container">
            <div className="jar-row" id="jar-row-1" ref={bubbleRef}>
              <div className="bubble-container randomColor">
                <div className="bubble">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="x"></div>
    </div>
  );
};

export default TechStackComponent;
