import React from "react";

const Project = ({ name, description, app_url, code_url, tags }) => (
  <div className="mx-4 mb-8 py-8 px-8 border-2 rounded-xl border-slate-300 shadow-md">
    <h2 className="mb-3 text-2xl font-bold">
      {name}
    </h2>
    <p className="mb-4">
      {description}
    </p>
    {app_url !== "#" &&
      <p><a
        className="underline decoration-dotted text-blue-700 decoration-blue-700"
        href={app_url}
        target="_blank"
        rel="noreferrer">Visit live app ↗
      </a></p>
    }
    {code_url !== "#" &&
      <p><a
        className="underline decoration-dotted text-blue-700 decoration-blue-700"
        href={code_url}
        target="_blank"
        rel="noreferrer">Visit project code ↗
      </a></p>
    }
    {tags.map((tag) => (
      <span class="mb-2 mr-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        {tag}
      </span>
    ))}
  </div>
);

export default Project;