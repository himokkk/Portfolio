import React, { useEffect } from "react";

import "../css/techstack.css";

import python_logo from "../assets/techstack/python-logo.svg";
import python from "../assets/techstack/python.svg";
import react_logo from "../assets/techstack/react-logo.svg";
import react from "../assets/techstack/react.svg";
import { ReactComponent as JavaScriptLogo } from "../assets/techstack/javascript-logo.svg";
import { ReactComponent as TypeScriptLogo } from "../assets/techstack/typescript-logo.svg";

import CSSLogo from "../assets/techstack/css-logo.svg";
import HTMLLogo from "../assets/techstack/html-logo.svg";
import DjangoLogo from "../assets/techstack/django-logo.svg";
import DockerLogo from "../assets/techstack/docker-logo.svg";
import CppLogo from "../assets/techstack/cpp-logo.svg";

interface Vector {
  x: number;
  y: number;
}

interface Ball {
  x: number;
  y: number;
  radius: number;
}

const TechStackComponent = () => {
  function getRandomColor(): string {
    const hue = Math.floor(Math.random() * 361);
    const saturation = "70%";
    const lightness = "80%";

    return `hsl(${hue}, ${saturation}, ${lightness})`;
  }

  useEffect(() => {
    let elements = document.getElementsByClassName(
      "randomColor"
    ) as HTMLCollectionOf<HTMLDivElement>;
    Array.from(elements).forEach((element: HTMLDivElement) => {
      var bubbleElement = element.querySelector(".bubble") as HTMLDivElement;
      var secondChildElement1 = bubbleElement.querySelector(
        "span:nth-child(1)"
      ) as HTMLDivElement;
      var secondChildElement2 = bubbleElement.querySelector(
        "span:nth-child(2)"
      ) as HTMLDivElement;

      let color = getRandomColor();
      secondChildElement1.style.borderLeftColor = color;
      secondChildElement2.style.borderRightColor = color;
    });
  }, []);

  const randomSpawnPosition = (centerPoint: Ball, bubble_size: number) => {
    let ballPosition: Vector = {
      x: Math.floor(Math.random() * (centerPoint.radius * 2 - bubble_size)),
      y: Math.floor(Math.random() * (centerPoint.radius * 2 - bubble_size)),
    };
    let distX = ballPosition.x - centerPoint.x - bubble_size / 2;
    let distY = ballPosition.y - centerPoint.y - bubble_size / 2;

    while (
      Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)) >=
      centerPoint.radius - bubble_size / 2
    ) {
      ballPosition = {
        x: Math.floor(Math.random() * (centerPoint.radius * 2 - bubble_size)),
        y: Math.floor(Math.random() * (centerPoint.radius * 2 - bubble_size)),
      };
      distX = ballPosition.x - centerPoint.x - bubble_size / 2;
      distY = ballPosition.y - centerPoint.y - bubble_size / 2;
    }

    return ballPosition;
  };

  const calculateNewVelocity = (
    ballPosition: Vector,
    centerPoint: Vector,
    velocity: Vector
  ) => {
    const normalVector = {
      x: ballPosition.x - centerPoint.x,
      y: ballPosition.y - centerPoint.y,
    };
    const normalMagnitude = Math.sqrt(
      normalVector.x * normalVector.x + normalVector.y * normalVector.y
    );
    const normalizedNormalVector = {
      x: normalVector.x / normalMagnitude,
      y: normalVector.y / normalMagnitude,
    };
    const dotProduct =
      velocity.x * normalizedNormalVector.x +
      velocity.y * normalizedNormalVector.y;
    const reflectedVelocity = {
      x: velocity.x - 2 * dotProduct * normalizedNormalVector.x,
      y: velocity.y - 2 * dotProduct * normalizedNormalVector.y,
    };

    return reflectedVelocity;
  };

  const getCorrectiveVector = (
    ball: Ball,
    ballVelocity: Vector,
    circle: Ball
  ) => {
    const distance = Math.sqrt(
      Math.pow(ball.x - circle.x, 2) + Math.pow(ball.y - circle.y, 2)
    );

    const distanceToIntersection = distance - circle.radius + ball.radius;

    const timeToIntersection =
      distanceToIntersection /
      Math.sqrt(Math.pow(ballVelocity.x, 2) + Math.pow(ballVelocity.y, 2));

    const correctiveVector = {
      x: ballVelocity.x * timeToIntersection,
      y: ballVelocity.y * timeToIntersection,
    };
    return correctiveVector;
  };

  useEffect(() => {
    let jar = document.getElementById("jar") as HTMLDivElement;
    let bubbles = document.getElementsByClassName(
      "randomColor"
    ) as HTMLCollectionOf<HTMLDivElement>;

    Array.from(bubbles).forEach((bubble: HTMLDivElement) => {
      const jar_size = jar.offsetHeight;
      const bubble_size = bubble.offsetHeight;
      const centerPoint: Ball = {
        x: jar_size / 2,
        y: jar_size / 2,
        radius: jar_size / 2,
      };

      let position: Vector = randomSpawnPosition(centerPoint, bubble_size);

      bubble.style.left = position.x.toString() + "px";
      bubble.style.top = position.y.toString() + "px";
      const randomSign = Math.random() < 0.5 ? -1 : 1;
      const speed = 30;
      let velocity = {
        x: Math.floor(Math.random() * speed) * randomSign,
        y: 0,
      };
      velocity.y = Math.sqrt(Math.pow(speed, 2) - Math.pow(velocity.x, 2)) * -1;

      const moveBubble = () => {
        let topPosition = parseFloat(bubble.style.top);
        let leftPosition = parseFloat(bubble.style.left);

        leftPosition += velocity.x;
        topPosition += velocity.y;
        let ballPosition: Ball = {
          x: leftPosition + bubble_size / 2,
          y: topPosition + bubble_size / 2,
          radius: bubble_size / 2,
        };

        const distX = ballPosition.x - centerPoint.x;
        const distY = ballPosition.y - centerPoint.y;

        if (
          Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)) >=
          jar_size / 2 - bubble_size / 2
        ) {
          const correctiveVector: Vector = getCorrectiveVector(
            ballPosition,
            velocity,
            centerPoint
          );

          leftPosition -= correctiveVector.x;
          topPosition -= correctiveVector.y;
          const newVelocity = calculateNewVelocity(
            ballPosition,
            centerPoint,
            velocity
          );

          velocity = newVelocity;
        }
        bubble.style.top = topPosition + "px";
        bubble.style.left = leftPosition + "px";

        const fps = 60;
        setTimeout(() => {
          requestAnimationFrame(moveBubble);
        }, 1000 / fps);
      };
      //requestAnimationFrame(moveBubble);
    });
  }, []);

  return (
    <div className="stack-content">
      <div className="flex">
        <div className="col1">
          <div id="python-circle">
            <img src={python_logo} className="python-logo" alt="Photo" />
            <img src={python} className="python" alt="Photo" />
          </div>
          <div id="python-stack">
            <div className="bubble-container" id="django-bubble">
              <div className="bubble">
                <span></span>
                <span></span>
                <div>
                  <img src={DjangoLogo} id="django-logo" alt="Photo" />
                </div>
              </div>
            </div>

            <div className="bubble-container" id="docker-bubble">
              <div className="bubble">
                <span></span>
                <span></span>
                <div>
                  <img src={DockerLogo} id="docker-logo" alt="Photo" />
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
                  <img src={react_logo} alt="Photo" />
                  <img src={react} alt="Photo" />
                </div>
              </div>
            </div>
            <div id="front-stack-1">
              <div className="bubble-container" id="css-bubble">
                <div className="bubble">
                  <span></span>
                  <span></span>
                  <div>
                    <img src={CSSLogo} id="css-logo" alt="Photo" />
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>

              <div className="bubble-container" id="html-bubble">
                <div className="bubble">
                  <span></span>
                  <span></span>
                  <div>
                    <img src={HTMLLogo} id="html-logo" alt="Photo" />
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
                  <TypeScriptLogo id="ts-logo" />
                </div>
              </div>
            </div>

            <div className="bubble-container" id="js-bubble">
              <div className="bubble">
                <span></span>
                <span></span>
                <div>
                  <JavaScriptLogo id="js-logo" />
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
              <img src={CppLogo} id="cpp-logo" alt="Photo" />
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
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="jar-row" id="jar-row-1">
            <div className="bubble-container randomColor">
              <div className="bubble">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="x"></div>
    </div>
  );
};

export default TechStackComponent;
