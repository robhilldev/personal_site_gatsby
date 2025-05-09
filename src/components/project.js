import React from "react"

const Project = ({ name, page, description, app_url, code_url, tags }) => (
  <div id={page} className="rounded-lg py-8 px-6 shadow-md sm:px-8">
    <div className="mb-6 rounded-lg bg-white/30 p-4 shadow-md ring-1 ring-inset ring-white/10 backdrop-blur-3xl">
      <h2 className="mb-3 text-2xl font-bold">{name}</h2>
      <p className="mb-4">{description}</p>
      {app_url !== "#" && (
        <p className="mb-4">
          <a
            className="text-sky-700 underline decoration-sky-700 decoration-dotted"
            href={app_url}
            target="_blank"
            rel="noreferrer"
          >
            Visit live app ↗
          </a>
        </p>
      )}
      {code_url !== "#" && (
        <p>
          <a
            className="text-sky-700 underline decoration-sky-700 decoration-dotted"
            href={code_url}
            target="_blank"
            rel="noreferrer"
          >
            Visit project code ↗
          </a>
        </p>
      )}
    </div>
    {tags.map(tag => (
      <span
        key={tag}
        className="mb-2 mr-2 inline-flex items-center rounded-md bg-white/50 px-2 py-1 text-xs font-semibold text-[--var-color-text] shadow-md ring-1 ring-inset ring-white/10 backdrop-blur-3xl"
      >
        {tag}
      </span>
    ))}
  </div>
)

export default Project
