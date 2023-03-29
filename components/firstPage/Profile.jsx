import { useResumeContext } from "@/context/resumeContext";
import React from "react";

const Profile = () => {
  const { profile } = useResumeContext();
  const { name, role, summary } = profile;
  return (
    <>
      <div className="name mb">
        <h1 id="name-devon" className="mb">
          {name}
        </h1>
        <h2>{role}</h2>
      </div>

      <div className="Profile mb">
        <p>{summary}</p>
      </div>
    </>
  );
};

export default Profile;
