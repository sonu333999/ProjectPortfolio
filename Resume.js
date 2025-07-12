import React from "react";
import "./Resume.css";
import profileImg from "../assets/about.jpg";
import resumeImg from "../assets/Resume.jpg";

function Resume() {
  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-container">
        <div className="profile-box">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <h3 className="profile-name">Sonu Khajotiya</h3>
          <p className="profile-role">Full Stack Developer</p>
        </div>

        <div className="resume-box">
          <img src={resumeImg} alt="Resume Preview" className="resume-img" />
          {/* <p>Click below to  download my resume:</p> */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
