import React, { useRef } from "react";
import './Contact.css'
import Phone from "../../img/twitter.png";
import Email from "../../img/gmail.jpg";
import Address from "../../img/facebook.png";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs
        .sendForm(
            'service_hebg3ht',
             'template_4760xi9', 
             formRef.current,
              'odVrLQpGzMEOOrc-h'
              )

        .then(
            (result) => {
            console.log(result.text);
           
        },
         (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className="c">
      <div className="c-bg">
      </div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">Let's have a word or two</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src={Phone} alt="" className="c-icon" />
                      +250783801791
                  </div>
                  <div className="c-info-item">
                      <img src={Email} alt="" className="c-icon" />
                      ibyiringiro99@gmail.com
                  </div>
                  <div className="c-info-item">
                      <img src={Address} alt="" className="c-icon" />
                      100KG Gasabo Street, Kigali City
                  </div>
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b>Have a gig for me?</b>Get in touch. Always eager to learn, and go all in in my projects. Make sure to
                  contact me. 
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" name="user_name" />
                  <input type="text" placeholder="Subject" name="user_subject" />
                  <input type="text" placeholder="Email" name="user_email" />
                  <textarea rows="5" placeholder="message" name="message"/>
                  <button>Submit</button>
                 
              </form>
          </div>
      </div>
    </div>
  )
}

export default Contact;
