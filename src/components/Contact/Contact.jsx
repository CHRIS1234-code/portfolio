
import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import { themeContext } from '../../context';

export default function Contact() {

  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fhg0qw8', 'template_0boeg8n', form.current, 'Yz4gG2jJGqbsu-2nG')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awesome">
                    <span style={{color: darkMode ? "white" : ''}}>Get In Touch</span>
                    <span>Contact Me</span>
                    <div className='blur s-blur' 
                    style={{background:"#ABF1FF94"}}
                    ></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input action="" type='text' placeholder='Name' className='user' name='user_name' />
                <input type="email" name="user_email" id="" placeholder='Email' className='user'/>
                <textarea name="message" id="" cols="30" rows="3" className='user' placeholder='message'/>
                <input type="submit" value="Send" className='button'/>
                <span>{done && "Thanks from contacting Me!"}</span>
                <div className="blur c-blur" style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}


