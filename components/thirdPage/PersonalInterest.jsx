import { useResumeContext } from "@/context/resumeContext";
import React from "react";

const PersonalInterest = () => {
  const { personalIntrest } = useResumeContext();

  return (
    <div className="mb">
      <h4 className="personal">Personal Interest</h4>

      <ul>
        {personalIntrest.map((p, i) => {
          return <li key={i}>{p}</li>;
        })}
      </ul>
    </div>
  );
};

export default PersonalInterest;
