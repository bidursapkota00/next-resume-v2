// src/components/References.tsx

import React from "react";
import { resumeData } from "../data";
import "./References.css";
import Title from "./Title";

const References = () => {
  return (
    <section className="references-section">
      <Title text={resumeData.references.heading} />

      <div className="reference-list">
        {resumeData.references.list.map((item, index) => (
          <div className="reference-item" key={index}>
            {/* Left Side: Details */}
            <div className="reference-left">
              <h3>{item.title}</h3>
              <p className="name">
                {item.name.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    <span>{word.slice(0, 1)}</span>
                    {word.slice(1)}
                    &nbsp;
                  </React.Fragment>
                ))}
              </p>

              <p className="organization">{item.organization}</p>
              <p className="email">Email: {item.email}</p>
            </div>

            {/* Right Side: Abbreviation and Phone */}
            <div className="reference-right">
              <p className="abbr">{item.abbr}</p>
              <p className="phone">{item.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
