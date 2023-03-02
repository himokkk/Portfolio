import React from "react";

import "./timeline.css";

const TimeLineComponent = () => {
    return (
        <div className="timeline-main" id="timeline">
            <div className="techstack-header prevent-select">
                <h1>Experience</h1>
                <h1>Education</h1>
            </div>
            <div className="timeline-content">
                <div className="left-container">
                    <div className="timestamp" id="comp-timestamp">
                        <div className="timestamp-content">
                            <div className="timestamp-date prevent-select">07-09.2022</div>
                            <div className="timestamp-title">Backend Developer | Comp S. A.</div>
                            <div className="timestamp-description">
                                Warsaw | Technologies used: <br />
                                Django, Django Rest Framework, Docker, Docker-compose, React(JavaScript, TypeScript),
                                HTML, CSS, Poetry, CD/CI.
                            </div>
                        </div>
                        <div className="timestamp-hr" />
                    </div>
                </div>
                <hr id="timeline-hr" />
                <div className="right-container">
                    <div className="timestamp" id="high-school-timestamp">
                        <div className="timestamp-hr" />
                        <div className="timestamp-content">
                            <div className="timestamp-date prevent-select">2018-2021</div>
                            <div className="timestamp-title">CLX High School</div>
                            <div className="timestamp-description">Mathematics and Computer Science</div>
                        </div>
                    </div>

                    <div className="timestamp" id="studies-timestamp">
                        <div className="timestamp-hr" />
                        <div className="timestamp-content">
                            <div className="timestamp-date prevent-select">2021-2024</div>
                            <div className="timestamp-title">UKSW</div>
                            <div className="timestamp-description">Warsaw | BS Computer Science</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLineComponent;
