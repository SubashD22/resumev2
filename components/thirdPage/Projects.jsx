import { useResumeContext } from "@/context/resumeContext";
import React from "react";

const Projects = () => {
  const { projects, training } = useResumeContext();
  return (
    <div className="Work-experience mb">
      <div className="experience">
        <h2 style={{ fontWeight: "bold" }}>Projects</h2>
        {projects.map((p, i) => {
          return (
            <div key={i}>
              <h4 style={{ fontWeight: "bold" }}>{p.title}</h4>
              <p>{p.time}</p>

              <h4 style={{ fontWeight: "bold" }}>{p.company}</h4>
              <p>{p.note}</p>
              <hr />
            </div>
          );
        })}
        <h2>Traning</h2>
        {training.map((t, i) => {
          return (
            <div key={i}>
              <h4 style={{ fontWeight: "bold" }}>{t.title}</h4>
              <p>{t.time}</p>

              <h4 style={{ fontWeight: "bold" }}>{t.company}</h4>
              <p>{t.note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
