import React from "react";
import Skills from "../firstPage/Skills";

const Languages = () => {
  return (
    <div className="mb">
      <h2 className="techskils">Languages</h2>
      <p className="tech">English</p>
      <div className="marks-dots">
        <Skills points={7} />
      </div>

      <p className="tech">Hindi</p>
      <div className="marks-dots">
        <Skills points={9} />
      </div>

      <p className="tech">French</p>
      <div className="marks-dots">
        <Skills points={8} />
      </div>
    </div>
  );
};

export default Languages;
