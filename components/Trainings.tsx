// src/components/Trainings.tsx

import { resumeData } from "../data";
import Title from "./Title";
import "./Trainings.css";

const Trainings = () => {
  return (
    <section className="trainings-section">
      <Title text={resumeData.trainings.heading} />

      <ol className="trainings-list">
        {resumeData.trainings.list.map((item, index) => (
          <div className="training-item" key={index}>
            <li>
              <span
                className="description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </li>
            <span className="date">{item.date}</span>
          </div>
        ))}
      </ol>
    </section>
  );
};

export default Trainings;
