import React from 'react';
import NavBar from './NavBar';
import '../styles/Projects.css';

const Projects = () => (
    <div className="projects">
        <NavBar />
        <div className="images">
    <a href="https://objective-pare-9e9a26.netlify.app/">
        <img src={require('../images/LG.png')} className="LG-img" alt="game"
            onMouseOver={e => (e.currentTarget.src = require('../images/netlify.png'))}
            onMouseOut={e => (e.currentTarget.src = require('../images/LG.png'))} />
    </a>
    <a href="https://focused-ardinghelli-15a5ec.netlify.app/">
        <img src={require('../images/SE.png')} className="SE-img" alt="Surreal Estate"
            onMouseOver={e => (e.currentTarget.src = require('../images/heroku.png'))}
            onMouseOut={e => (e.currentTarget.src = require('../images/SE.png'))} />
    </a>
    <a href="https://shelby568.github.io/weather-app/">
        <img src={require('../images/WA.png')} className="WA-img" alt="Weather App"
            onMouseOver={e => (e.currentTarget.src = require('../images/GHpages.png'))}
            onMouseOut={e => (e.currentTarget.src = require('../images/WA.png'))} />
    </a>
    <a href="https://github.com/Shelby568/book-library-api">
        <img src={require('../images/BL.png')} className="BL-img" alt="Back End"
            onMouseOver={e => (e.currentTarget.src = require('../images/github.png'))}
            onMouseOut={e => (e.currentTarget.src = require('../images/BL.png'))} />
    </a>    
    </div>
</div>
);

export default Projects;