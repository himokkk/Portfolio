import { AiFillGithub } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaCity } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

import EmailSender from "../EmailSender/EmailSenderComponent";

import "./footer.css";

const FooterComponent = () => {
    const github_url = "https://github.com/himokkk/";
    const linkedin_url = "https://www.linkedin.com/in/pawe%C5%82-kwieci%C5%84ski-3572881b7/";
    const slack_url = "https://slack.com/";

    return (
        <div id="contact">
            <div className="contact-content">
                <EmailSender />
                <div className="contact-row">
                    <div className="info">
                        <FaCity /> Warsaw
                    </div>
                    <div className="info">
                        <IoIosPhonePortrait /> +48 665 341 306
                    </div>
                    <div className="info">
                        <CiMail /> pawel.kwiecinski@student.uksw.edu.pl
                    </div>
                    <div className="info">
                        <a href={github_url} target="_blank">
                            <AiFillGithub /> github.com/himokkk
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
