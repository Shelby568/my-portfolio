import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
        <Link className="home-link" to="/">Home</Link>
        <Link className="home-link" to="/About">About</Link>
        <Link className="home-link" to="/Projects">Projects</Link>
        <Link className="home-link" to="/Contact">Contact</Link>
        <a className="home-link" href="../images/ShelbyHarrison.pdf" download>CV</a>
    <h1 className="name">Shelby Harrison.</h1>
    </div>
);

export default Home;