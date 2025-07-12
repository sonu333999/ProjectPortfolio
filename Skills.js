import React from "react";
import "./Skills.css";
// import skillImg from "../assets/skills.jpg";

function Skills() {
  const skills = [
    "UI/UX Design",
    "HTML, CSS, JavaScript",
    "Frontend Development",
    "Microsoft Word, PowerPoint, Excel",
    "German (Language Certificate)",
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        <div className="skills-img-box">
          {/* <img src={skillImg} alt="Skills" className="skills-img" /> */}
        </div>

        <ul className="skills-list">
          {skills.map((skill, idx) => (
            <li key={idx} className="skill-badge">
               {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
