import './contact.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactData from '../../contactData';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_88s04bd', 'template_g2mlqil', form.current, '7hkChJT4u0TulO1uZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contact'>
       <div className="files">
        <div className="tabs">
          <div className="personal-info">
            <span>contact</span>
            <span>x</span>
          </div>
          <div className="space-files"></div>
        </div>
        <div className="card">
          <div className='contactInfo'>
            <span>Contact-me</span>
            <p>// or you can send me a message here: 09954626429</p>
          </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="username">
            <span>_name:</span>
            <input type="text" placeholder="What Shall I Call You?" name='user_name'/>
          </div>
          <div className="email">
            <span>_email:</span>
            <input type="email" placeholder='Where Can I Reach You?' name='user_email'/>
          </div>
          <div className="subject">
            <span>_subject:</span>
            <input type="text" placeholder="What's on Your Mind?" name='subject'/>
          </div>
          <div className="message">
            <span>_message:</span>
            <textarea name="message" cols="30" rows="10" placeholder="Share Your Thoughts"></textarea>
          </div>
          <button>
            submit-message
          </button>
          </form>
        </div>
      </div>
      <div className="showcase">
          <div className="snippet">
            <img src="/submit.png" alt="" />
          </div>
          <hr/>
          <div className='textCode'>
            {contactData.content.map((params) => (
              <p key={params}>{`${params}`}</p>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Contact;
