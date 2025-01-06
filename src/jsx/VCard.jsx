import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import vCardsJS from 'vcards-js';

const VCard = ({ name, title, email, phone }) => {

    const createVCard = () => {
        const vCard = vCardsJS();

        const nameParts = name.split(' ');
        vCard.firstName = nameParts[0];
        vCard.lastName = nameParts[1] || '';

        vCard.title = title;
        vCard.email = email;
        vCard.cellPhone = phone;

        return vCard;
    };

    const downloadVCard = () => {
        const vCard = createVCard();
        const vCardString = vCard.getFormattedString();

        const blob = new Blob([vCardString], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = url;
        link.download = `${name.replace(' ', '')}.vcf`;
        link.click();
        URL.revokeObjectURL(url);
    };


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm("service_5173", "template_5173", e.target, "zXyBEeDoESnkExPZo")
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSent(true);
                    setLoading(false);
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log(error.text);
                    setError("Failed to send message. Please try again.");
                    setLoading(false);
                }
        );
    };

    useEffect(() => {
        let toSendBtn = document.querySelector('.toSendMessange');
        let toSendBlock = document.querySelector('.email-js');
        let toSendMessageBlock = document.querySelector('.to-send-message');
        let inputs = document.querySelectorAll('input');
        let message = document.querySelector('.message');
        let submitBtn = document.querySelector('.submit');
        toSendMessageBlock.style.height = '0px';
        
        toSendBtn.addEventListener('click', () => {
            if (toSendMessageBlock.style.height == '0px') {
                toSendMessageBlock.style.height = '252px';
            } else {
                toSendMessageBlock.style.height = '0px';
            }
        });

        inputs.forEach(e => {
            let placeHolder = e.placeholder;

            e.addEventListener('focus', () => {
                e.placeholder = ''
            })
            e.addEventListener('blur', () => {
                e.placeholder = placeHolder
            });
        });

        message.addEventListener('focus', () => {
            message.placeholder = ""
        });
        message.addEventListener('blur', () => {
            message.placeholder = "Write your message"
        });
        
    }, [])


    return (<div className='contact-btns'>
        <div className="btns">
            <button className='saveContactAbout' onClick={downloadVCard}>
                Save Contact
            </button>
            <button className='toSendMessange'>
                Direct
            </button>
        </div>

        <div className="email-js">

            <div className="to-send-message">
                <form onSubmit={handleSubmit} className="form-message" id="form-message">
                    <div className="div-name">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                        />
                    </div>
                    <div className="div-email">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john.smith2024@gmail.com"
                            required
                        />
                    </div>
                    <div className="div-message">
                        <label>Message:</label>
                        <textarea
                            className="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            required
                        ></textarea>
                    </div>
                    <button className="submit" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {isSent && <p className="to-send-successful">Your message has been sent successfully!</p>}
                {error && <p className="to-send-error">{error}</p>}
            </div>
        </div>
    </div>
    );
};

export default VCard;