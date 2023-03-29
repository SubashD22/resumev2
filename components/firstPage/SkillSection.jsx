import React from "react";
import Skills from "./Skills";

const SkillSection = () => {
  return (
    <div className="skills-section mb">
      <div className="skills">
        <h2>Skills</h2>

        <h4>Skill 1</h4>
        <div className="marks-dots">
          <Skills points={8} />
        </div>

        <h4>Skill 2</h4>
        <div className="marks-dots">
          <Skills points={9} />
        </div>

        <h4>Skill 3</h4>
        <div className="marks-dots">
          <Skills points={8} />
        </div>

        <h4>Skill 4</h4>
        <div className="marks-dots">
          <Skills points={7} />
        </div>

        <h4>Skill 5</h4>
        <div className="marks-dots">
          <Skills points={8} />
        </div>

        <h4>Skill 6</h4>
        <div className="marks-dots">
          <Skills points={7} />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
