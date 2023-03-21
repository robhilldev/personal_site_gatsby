import React from "react";

const Project = ({ name, description, app_url, code_url }) => (
  <div>
    <h2>{name}</h2>
    <p>{description}</p>
    <p><a href={app_url}>Visit live app ↗</a></p>
    <p><a href={code_url}>Visit project code ↗</a></p>
  </div>
);

export default Project;