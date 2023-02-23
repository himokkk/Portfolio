import React from "react";

import "../css/introduction.css";

import ScrollTo from "../functions/ScrollTo";

import photo from "../assets/photo.png";

interface Props {
    skillsRef: React.RefObject<HTMLDivElement>;
}

const IntroductionComponent = (props: Props) => {
    return (
        <div className="introduction-main">
            <div className="intruduction-content">
                <div className="greeting float-left">
                    <h1>Paweł Kwieciński</h1>
                    <hr className="introduction-line float-left" />
                    <div className="clear-both"></div>
                    <div className="description1">
                        I am a student of Computer Science. I have been interested in maths and programming since middle
                        school.
                    </div>
                    <hr className="introduction-line float-left" />
                    <div className="clear-both"></div>
                </div>
                <div className="circle prevent-select float-left"></div>
                <img src={photo} className="photo float-left" alt="me" />
                <div className="introduction-right float-left">
                    <h2>Software delevoper</h2>
                    <hr className="introduction-line float-left" />
                    <div className="clear-both"></div>
                    <div className="description2">Mostly interesed in Python, C++, JavaScript/TypeScript</div>
                    <hr className="introduction-line float-left" />
                </div>
            </div>
        </div>
    );
};

export default IntroductionComponent;
