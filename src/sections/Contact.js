import { useState } from 'react';
import { send } from 'emailjs-com';
import LinkedInLogo from './../icons/linkedin.png'
import FacebookLogo from './../icons/facebook.png'
import './contact.css';
import './contactMobile.css';

export const Contact = () => {
  const [emailInfo, setEmailInfo] = useState({
    from_name: '',
    to_name: 'mrmicrowaveoven@gmail.com',
    message: '',
    reply_to: '',
  });
  const [emailSentStatus, setEmailSentStatus] = useState(null)
  const handleChange = (e) => {
    setEmailInfo({ ...emailInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      emailInfo,
      process.env.REACT_APP_EMAIL_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setEmailSentStatus(true)
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setEmailSentStatus(false)
      });
  };

  const formValid = Object.keys(emailInfo).map(key => {
    return emailInfo[key].trim() !== ""
  }).every(value => value !== false)

  return (
    <div className="contact-body">
      <div className="contact-info">
        <div className="contact-info-title">Contact Info</div>
        <div className="contact-info-text">Currently getting started in New Orleans, LA</div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/ostem-nola-9a86b4264/" target="_blank" rel="noreferrer">
            <img src={LinkedInLogo} className="contact-icon" alt="linkedin logo"/>
          </a>
          <a href="https://www.facebook.com/groups/3551595705161305/" target="_blank" rel="noreferrer">
            <img src={FacebookLogo} className="contact-icon" alt="facebook logo"/>
          </a>
        </div>
        <div className="contact-info-text">Email us at&nbsp;
          <a href = "mailto: contact@ostemnola.org">contact@ostemnola.org</a>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-title">Say Hello!</div>
        <form onSubmit={onSubmit} className="contact-form-fields">
          <div>Name</div>
          <input
            type='text'
            name='from_name'
            placeholder='Name'
            className="contact-text-field"
            value={emailInfo.from_name}
            onChange={handleChange}
          />
          <div>Email</div>
          <input
            type='text'
            name='reply_to'
            placeholder='Email'
            className="contact-text-field"
            value={emailInfo.reply_to}
            onChange={handleChange}
          />
          <div>Message</div>
          <textarea
            type='text_area'
            name='message'
            placeholder='Message'
            className="contact-textarea-field"
            value={emailInfo.message}
            onChange={handleChange}
            rows="10"
            cols="30"
          />
          <br/>
          <div className="confirmation-section">
            <button className="contact-button" type='submit' disabled={formValid && emailSentStatus === null ? "" : "disabled"}>Submit</button>
            <div className={emailSentStatus === true ? "email-confirmation-message" : "hidden"}>Email sent!</div>
            <div className={emailSentStatus === false ? "email-confirmation-message" : "hidden"}>
            Sorry, looks like something went wrong.
            <br/>
            Try emailing us at <a href = "mailto: contact@ostemnola.org">contact@ostemnola.org</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact