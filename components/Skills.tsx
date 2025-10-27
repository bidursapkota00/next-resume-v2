// src/components/Skills.tsx

import React from "react";
import { resumeData } from "../data";
import "./Skills.css";
import Title from "./Title";

const Skills = () => {
  return (
    <section className="skills-section">
      <Title text={resumeData.skills.heading} />

      <div className="skills-grid">
        {resumeData.skills.categories.map((category, index) => (
          <React.Fragment key={index}>
            <div className="skill-category">{category.name}</div>
            <div className="skill-items">{category.items}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
