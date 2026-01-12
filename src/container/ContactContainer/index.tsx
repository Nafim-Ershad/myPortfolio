import React from "react";
import { NavLink } from "react-router";
import { Send, ChevronLeft } from "lucide-react";

import "./styles.scss";

export default function Index(){
    return(
        <div className="contact-container">
            <div className="form-container">
                <h1>Feel free to contact me !!!</h1>
                <form action="https://formsubmit.co/c77a5171cc001bc3cb0e7cb1eeabaa18" target="_blank" method="POST">
                    <div className="form-group">
                        <input type="text" name="Name" className="name-input" />
                        <label>Your Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" name="Email" className="email-input" />
                        <label>Email</label>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Subject" className="subject-input" />
                        <label>Subject</label>
                    </div>
                    <div className="form-group text-area">
                        <textarea name="Message" className="message-input"></textarea>
                        <label>Your Message</label>
                    </div>

                    <button type="submit">
                        <span>Send</span>
                        <Send />
                    </button>
                </form>
            </div>

            <NavLink to="/">
                <ChevronLeft />
                <span>Back Home</span>
            </NavLink>
        </div>
    )
}