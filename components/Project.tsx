import { resumeData } from "../data";
import Title from "./Title";
import "./Project.css";

const Project = () => {
  return (
    <section className="projects-section">
      <Title text={resumeData.projects.heading} />

      <div className="project-list">
        {resumeData.projects.projects.map((project, index) => (
          <div className="project-item" key={index}>
            <a href={project.url} target="_blank">
              <h3>{project.title}</h3>
              <img src="/external-link.png" alt="Link" />
            </a>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
