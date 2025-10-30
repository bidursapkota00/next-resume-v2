// src/components/Honors.tsx

import React from "react";
import { resumeData } from "../data";
import "./Honors.css";
import Title from "./Title";

const Honors = () => {
  return (
    <section className="honors-section">
      <Title text={resumeData.honorsAndAwards.heading} />

      <div className="honors-list">
        {resumeData.honorsAndAwards.sections.map((section, index) => (
          <div className="honor-category" key={index}>
            <h3>
              {section.title.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  <span>{word.slice(0, 1)}</span>
                  {word.slice(1)}
                  &nbsp;
                </React.Fragment>
              ))}
            </h3>
            <ul className="awards-list">
              {section.awards.map((award, i) => (
                <li className="award-item" key={i}>
                  <div className="award-left">
                    <span className="year">{award.year}</span>
                    {/* Using dangerouslySetInnerHTML to render the <strong> tags */}
                    <span
                      className="description"
                      dangerouslySetInnerHTML={{ __html: award.description }}
                    />
                  </div>
                  <div className="award-right">
                    {award.location && (
                      <span className="location">{award.location}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Honors;
