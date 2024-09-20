// Footer.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Import CSS for styling the footer

const Footer = () => {
    return (
        <footer>
          <p>Contact Us</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> contact@example.com
          </p>
        </footer>
    );
};

export default Footer;
