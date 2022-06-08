import React, {useState} from "react";
import emailjs from 'emailjs-com';
import './styles.css'
import MenuButton from "../../Reusable/MenuButton";
import Text from "../../Reusable/Text";



const ContactForm = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);


    const isValidEmail = (email:string) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    const submit = () => {
       isValidEmail(email)
        if (name && email && message) {
            const serviceId = "service_bcu3ii8";
            const templateId = "template_ut5n01j";
            const userId = "Yj_esVBDStHMxbVqT";
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    return(
        <div className="contact-form">
            <input className='contact-name' type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input className='contact-mail' type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea className='contact-message' placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <div onClick={submit}>
                <MenuButton text={'Send'}/>
            </div>
            { emailSent && <Text text={'Thank you for the message!'} type={'xxsbold'} color={"black"} />}
        </div>
)
}
export default ContactForm