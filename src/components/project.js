import React from "react";

const Project = ({ name, description, app_url, code_url }) => (
  <div className="pb-4 px-4">
    <h2 className="mb-3 text-2xl font-bold">
      {name}
    </h2>
    <p className="mb-3">
      {description}
    </p>
    <p><a
      className="underline decoration-dotted"
      href={app_url}
      target="_blank"
      rel="noreferrer">Visit live app ↗
    </a></p>
    <p><a
      className="underline decoration-dotted"
      href={code_url}
      target="_blank"
      rel="noreferrer">Visit project code ↗
    </a></p>
  </div>
);

export default Project;