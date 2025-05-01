import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Footer-top">
        <div className="footer-top-left">
          <h1>SwetA</h1>
          <p>
            Need a complete web application? I provide end-to-end solutions by
            integrating frontend (React.js) with backend (ASP.NET) and databases
            (SQL, DBMS) to deliver fully functional applications.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2023 Alex Bennett. All rights reserved.</p>

        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
  );
};

export default Footer;
