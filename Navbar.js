import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
{/* <img src={navbarImg} alt="Navbar" className="section-img" /> */}

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Sonu Khajotiya</h1>
      <div>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
