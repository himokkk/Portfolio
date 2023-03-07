import React, { useRef } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

import "./email_sender.css";

const EmailSender: React.FC = () => {
    const emailForm = useRef(null);
    const errorRef = useRef(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-ignore
        emailjs.sendForm("service_8gi25m9", "template_axeknlu", emailForm.current, "bnlSnLejGFC1Ee44t").then(
            function (response) {
                (e.target as HTMLFormElement).reset();
                if (errorRef.current) {
                    (errorRef.current as HTMLElement).innerHTML = "Success sending mail.";
                }
            },
            function (error) {
                if (errorRef.current) {
                    (errorRef.current as HTMLElement).innerHTML = "Error sending mail.";
                }
            },
        );
    };

    return (
        <div className="send-email-footer  prevent-select">
            <h2 ref={errorRef}>Email me!</h2>
            <form ref={emailForm} onSubmit={sendEmail}>
                <div className="email-container">
                    <div className="relative">
                        <label className="title-input-text" id="email-title">
                            Email
                        </label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <button type="submit">
                        Send
                        <div>
                            <FiSend className="send-icon" />
                        </div>
                    </button>
                </div>
                <div className="relative">
                    <label className="title-input-text" id="message-title">
                        Message
                    </label>
                    <textarea id="message" name="message" rows={12} placeholder="Enter your message"></textarea>
                </div>
            </form>
        </div>
    );
};

export default EmailSender;
