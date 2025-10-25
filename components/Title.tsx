import React from "react";
import "./Title.css";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="section-heading">
      <h2>
        <span>{text.slice(0, 3)}</span>
        {text.slice(3)}
      </h2>
      <div className="divider-line"></div>
    </div>
  );
};

export default Title;
