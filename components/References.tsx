import React from "react";
import { resumeData } from "../data";
import Title from "./Title";
import "./References.css";

const References = () => {
  return (
    <section className="references-section">
      <Title text={resumeData.references.heading} />
      <div className="references-list">
        {resumeData.references.items.map((reference, index) => (
          <div className="reference-item" key={index}>
            <div className="reference-row">
              <div className="reference-left">
                <h3>{reference.title}</h3>
              </div>
              <div className="reference-right">
                <p className="organization-tag">{reference.organizationTag}</p>
              </div>
            </div>
            <div className="reference-info">
              <p className="name">{reference.name}</p>
              <p className="organization">{reference.organization}</p>
              <p className="contact">
                Email:{" "}
                <a href={`mailto:${reference.email}`}>{reference.email}</a>
              </p>
              <p className="contact">
                <a href={`tel:${reference.phone}`}>{reference.phone}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
