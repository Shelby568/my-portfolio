import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import '../styles/Contact.css';

library.add(fab);

const Contact = () => (
    <div className="contact">
        <NavBar />
        <div className="contact-icons">
        <a href="mailto:shelby.harrison6@hotmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="6x" className="icon" />
        </a>
        <a href="https://github.com/Shelby568">
        <FontAwesomeIcon icon={['fab', 'github']} size="6x" className="icon" />
        </a>
        <a href="http://linkedin.com/in/shelby-harrison-2124a31b4">
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="6x" className="icon" />
        </a>
        </div>
    </div>
);

export default Contact;