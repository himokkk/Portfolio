import React from 'react';

import '../css/introduction.css'

import photo from '../assets/photo.png';

const IntroductionComponent: React.FC = (() => {
    return (
        <div className="introduction-main">
            <div className="intruduction-content">
                <div className="greeting float-left">
                    <h3>Hi, I`m</h3>
                    <h1>Paweł Kwieciński</h1>
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
    )
})

export default IntroductionComponent;