import React from "react";
import Skills from "../firstPage/Skills";

const TechnicalSkills = () => {
  return (
    <div className="mb">
      <h2>Technical Skills</h2>

      <h4>Technical Skills 1</h4>
      <div className="marks-dots">
        <Skills points={7} />
      </div>

      <h4>Technical Skills 2</h4>
      <div className="marks-dots">
        <Skills points={9} />
      </div>

      <h4>Technical Skills 3</h4>
      <div className="marks-dots">
        <Skills points={8} />
      </div>
    </div>
  );
};

export default TechnicalSkills;
