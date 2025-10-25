import { resumeData } from "../data";
import Title from "./Title";
import "./AcademicProject.css";

const AcademicProject = () => {
  return (
    <section className="projects-section">
      <Title text={resumeData.academicProjects.heading} />

      <div className="project-list">
        {resumeData.academicProjects.projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <p className="location">{project.location}</p>
            </div>

            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicProject;
