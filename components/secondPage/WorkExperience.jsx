import { useResumeContext } from "@/context/resumeContext";
import React from "react";

const WorkExperience = () => {
  const { workExperience } = useResumeContext();
  return (
    <>
      <>
        <h2 style={{ fontWeight: "bold" }}>Work Experience</h2>
        {workExperience.map((w, i) => {
          return (
            <React.Fragment key={i}>
              <h4 style={{ fontWeight: "bold" }}>{w.title}</h4>
              <p>{w.time}</p>

              <h4 style={{ fontWeight: "bold" }}>{w.company}</h4>
              <p>{w.note}</p>
              {i === workExperience.length - 1 ? <></> : <hr />}
            </React.Fragment>
          );
        })}
      </>
    </>
  );
};

export default WorkExperience;
