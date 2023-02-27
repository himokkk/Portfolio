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
            <div className="relative">
                <div id="introduction-nav">
                    <div id="small-logo">
                        <div>Paweł</div> <div>Kwieciński</div>
                    </div>
                    <div className="hire-me-button">Hire Me!</div>
                </div>
                <div className="introduction-content">
                    <div className="greeting float-left">
                        <h1 className="prevent-select">Paweł Kwieciński</h1>
                        <hr className="introduction-line float-left" />
                        <div className="clear-both"></div>
                        <div className="description1">
                            I am a student of Computer Science. I have been interested in maths and programming since
                            middle school.
                        </div>
                        <hr className="introduction-line float-left" />
                        <div className="clear-both"></div>
                    </div>
                    <div className="circle prevent-select float-left"></div>
                    <div className="introduction-right float-left">
                        <h2 className="prevent-select">Software delevoper</h2>
                        <hr className="introduction-line float-left" />
                        <div className="clear-both"></div>
                        <div className="description2">Mostly interesed in Python, C++, JavaScript/TypeScript</div>
                        <hr className="introduction-line float-left" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroductionComponent;
