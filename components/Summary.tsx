import { resumeData as data } from "../data";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import Title from "./Title";
import "./Summary.css";

const Summary = () => {
  return (
    <>
      <header className="resume-header">
        <h1>
          <span>{data.name.firstName}</span>{" "}
          <strong>{data.name.lastName}</strong>
        </h1>
        <p className="title">
          {data.title.split(" ").map((word, index) => (
            <span className="title__span" key={index}>
              {word}
            </span>
          ))}
        </p>
      </header>

      <section className="contact-info">
        <p>{data.contact.address}</p>
        <div className="contact-links">
          <a href={`tel:${data.contact.phone}`} className="contact-link">
            <FaPhoneAlt /> {data.contact.phone}
          </a>
          <span className="separator">|</span>
          <a href={`mailto:${data.contact.email}`} className="contact-link">
            <FaEnvelope /> {data.contact.email}
          </a>
        </div>
        <div className="contact-links">
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedinIn /> Linkedin
          </a>
          <span className="separator">|</span>
          <a
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub /> Github
          </a>
          <span className="separator">|</span>
          <a
            href={data.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGlobe /> Portfolio
          </a>
        </div>
      </section>

      <blockquote className="quote">
        <p>{data.quote}</p>
      </blockquote>

      <section className="summary-section">
        <Title text={data.summary.heading} />
        <p>{data.summary.text}</p>
      </section>
    </>
  );
};

export default Summary;
