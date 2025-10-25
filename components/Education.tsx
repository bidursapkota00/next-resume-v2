import React from "react";
import { resumeData } from "../data";
import "./Education.css";
import Title from "./Title";

const Education = () => {
  return (
    <section className="education-section">
      <Title text="Education" />

      <div className="education-list">
        {resumeData.education.map((item, index) => (
          <div className="education-item" key={index}>
            <div className="education-left">
              <h3>{item.institution}</h3>
              <p className="degree">
                {item.degree.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    <span>{word.slice(0, 1)}</span>
                    {word.slice(1)}
                    &nbsp;
                  </React.Fragment>
                ))}
              </p>
              <p className="description">{item.description}</p>
            </div>

            <div className="education-right">
              {item.location && <p className="location">{item.location}</p>}
              <p className="year">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
