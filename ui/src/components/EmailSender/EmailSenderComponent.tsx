import React from "react";
import { FiSend } from "react-icons/fi";

import "./email_sender.css";

const EmailSender: React.FC = () => {
    return (
        <div className="send-email-footer">
            <h2>Email me!</h2>
            <form>
                <div className="email-container">
                    <div className="relative">
                        <label className="title-input-text" id="email-title">
                            Email
                        </label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="send-button">
                        Send
                        <FiSend className="send-icon" />
                    </div>
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
