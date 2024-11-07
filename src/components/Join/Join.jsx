import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_4lx6lul', 'template_6gyrw7p', form.current, 'yFrMWOLKW_sYPnJ06')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const openMailClient = (event) => {
        event.preventDefault();

        const emailInput = form.current.user_email.value; // Access the email input value

        if (emailInput) {
            // Construct the mailto link with the entered email
            window.location.href = `mailto:keertidvcorai@gmail.com?subject=Subscription&body=Please subscribe me using this email: ${emailInput}`;
        }
    };

    return (
        <div className="Join" id="join-us">
            <div className="container">
                <div className="blur join-b-1"></div>
                <div className="blur join-b-2"></div>
                <div>
                    <span>Ready</span>
                    <span> to get</span>
                    <span> Join?</span>
                </div>
                <div>
                    <span>Start your Fitness journey with us. Join the Fitness Zone!</span>
                </div>

                <div className="register">
                    <form ref={form} className="email-container" onSubmit={openMailClient}>
                        <input type="email" name="user_email" placeholder="Enter your email address" required />
                        <button type="submit" className="btn btn-j">Join Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;
