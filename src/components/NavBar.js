import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
    <div className="nav-bar">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/About">About</Link>
        <Link className="link" to="/Projects">Projects</Link>
        <Link className="link" to="/Contact">Contact</Link>
        <a className="link" href="../images/ShelbyHarrison.pdf" download>CV</a>
    </div>
);

export default NavBar