import React from 'react';
import NavBar from './NavBar';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const About = () => (
    <div className="about">
        <NavBar />
        <img src={require("../images/IMG_3542.JPG")} className="me-img" alt="me"/>
        <section className="article">
    <p className="para">Hi! My name is Shelby and I'm a Junior Software Developer with a passion for learning and developing my skills.</p>
    <p className="para1">During my time studying with Manchester Codes, I gained a good knowledge across the full stack. I developed 
        skills in Javascript, HTML, CSS as well as worked with various frameworks and libraries including React, 
        mySQL, Sequelize and Node.
     </p>
     <p className="para2">Outside of coding, I love spending time and walking my three dogs!</p>
    </section>

    <footer className="footer">
        <FontAwesomeIcon icon={['fab', 'js-square']} className="icon1" size="6x" />
        <FontAwesomeIcon icon={['fab', 'html5']} className="icon2" size="6x" />
        <FontAwesomeIcon icon={['fab', 'css3']} className="icon3" size="6x" />
        <FontAwesomeIcon icon={['fab', 'react']} className="icon4" size="6x" />
        <FontAwesomeIcon icon={['fab', 'node-js']} className="icon5" size="6x" />
    </footer>
    </div>
);

export default About;