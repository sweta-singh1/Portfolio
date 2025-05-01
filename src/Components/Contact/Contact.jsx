import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> Email: example@gmail.com
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <FontAwesomeIcon icon={faPhone} /> Phone: +123-456-7890
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Location: New York,
                USA
              </p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="Your Name">Your Name</label>
          <input type="text" placeholder="Enter Your Name" />
          <label htmlFor="Your Email">Your Email</label>
          <input type="email" placeholder="Enter Your Email" />
          <label htmlFor="">Write message here!</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter Your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
