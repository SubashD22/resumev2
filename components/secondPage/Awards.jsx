import { useResumeContext } from "@/context/resumeContext";
import React from "react";

const Awards = () => {
  const { awards } = useResumeContext();
  return (
    <>
      <h2 id="awards">Awards</h2>
      {awards.map((a, i) => {
        return (
          <React.Fragment key={i}>
            <h4>{a.title}</h4>
            <p>{a.time}</p>

            <p>{a.company}</p>
            <p>URL : {a.url}</p>

            <ul>
              <li>{a.note}</li>
            </ul>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Awards;
