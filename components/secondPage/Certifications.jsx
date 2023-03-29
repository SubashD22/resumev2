import { useResumeContext } from "@/context/resumeContext";
import React from "react";

const Certifications = () => {
  const { certifications } = useResumeContext();
  return (
    <div className="mb">
      <h2>Certifications</h2>
      {certifications.map((c, i) => {
        return (
          <div key={i}>
            <h4>{c.title}</h4>
            <p>{c.time}</p>

            <p>{c.company}</p>
            <p>URL : {c.url}</p>

            <ul>
              <li>{c.note}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Certifications;
