import React from "react";
import "./About.css";
import profileImg from "../assets/about.jpg";

function About() {
  return (
    <section className="about-section">
      <img src={profileImg} alt="Sonu Khajotiya" className="profile-img" />
      <h2>About Me</h2>
      <p>
        Hi! I'm Sonu Khajotiya, a passionate UI/UX designer and frontend developer
        currently pursuing B.Tech at Poornima Institute of Engineering & Technology, Jaipur.
      </p>
    </section>
  );
}

export default About;
