import { useResumeContext } from "@/context/resumeContext";
import React from "react";

const Internships = () => {
  const { internships } = useResumeContext();
  return (
    <div className="mb">
      <h2 id="awards">Internships</h2>
      {internships.map((int, i) => {
        return (
          <div key={i}>
            <h4 className="award">{int.title}</h4>
            <p>{int.time}</p>

            <p className="company">{int.company}</p>
            <p>URL : {int.url}</p>

            <ul>
              {int?.note.map((n, i) => {
                return <li key={i}>{n}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Internships;
