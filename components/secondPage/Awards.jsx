import { useResumeContext } from "@/context/resumeContext";
import React from "react";

const Awards = () => {
  const { awards } = useResumeContext();
  return (
    <div className="mb">
      <h2 id="awards">Awards</h2>
      {awards.map((a, i) => {
        return (
          <div key={i}>
            <h4>{a.title}</h4>
            <p>{a.time}</p>

            <p>{a.company}</p>
            <p>URL : {a.url}</p>

            <ul>
              <li>{a.note}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Awards;
