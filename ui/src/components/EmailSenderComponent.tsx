import React from "react";

import "../css/email_sender.css";

const EmailSender: React.FC = () => {
    return (
        <div className="send-email-footer">
            <h2>Email me!</h2>
            <form>
                <div className="email-container">
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    <button type="submit">Send</button>
                </div>
                <textarea id="message" name="message" rows={7} placeholder="Enter your message"></textarea>
            </form>
        </div>
    );
};

export default EmailSender;
