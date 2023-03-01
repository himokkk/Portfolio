import "./introduction.css";

const IntroductionComponent = () => {
    return (
        <div id="introduction">
            <div className="relative">
                <div id="introduction-nav">
                    <div id="small-logo">
                        <div>Paweł</div>
                        <div>Kwieciński</div>
                    </div>
                    <div className="hire-me-button">Hire Me!</div>
                </div>
                <div className="introduction-content">
                    <div className="introduction-left">
                        <h2 className="prevent-select" id="my-name">
                            <div>Paweł</div>
                            <div>Kwieciński</div>
                        </h2>
                        <div className="description">
                            <div className="introduction-line" />
                            I am a student of Computer Science. I have been interested in maths and programming since
                            middle school.
                            <div className="introduction-line" />
                        </div>
                    </div>

                    <div className="introduction-right">
                        <h2 className="prevent-select" id="software-developer">
                            <div>Software</div>
                            <div>delevoper</div>
                        </h2>
                        <div className="description">
                            <div className="introduction-line" />
                            Mostly interesed in Python, C++, JavaScript/TypeScript
                            <div className="introduction-line" />
                        </div>
                    </div>
                    <div className="circle prevent-select" />
                </div>
            </div>
        </div>
    );
};

export default IntroductionComponent;
