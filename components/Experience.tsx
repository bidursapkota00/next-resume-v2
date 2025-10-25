import { resumeData } from "../data";
import Title from "./Title";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <Title text={resumeData.workExperience.heading} />

      <div className="experience-list">
        {resumeData.workExperience.jobs.map((job, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-row">
              <div className="experience-left">
                <h3>{job.company}</h3>
              </div>
              <div className="experience-right">
                <p className="location">{job.location}</p>
              </div>
            </div>

            <div className="experience-row">
              <div className="experience-left">
                <p className="title">{job.title}</p>
              </div>
              <div className="experience-right">
                <p className="dates">{job.dates}</p>
              </div>
            </div>

            <ul className="responsibilities-list">
              {job.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
