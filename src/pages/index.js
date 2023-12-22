import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Project from "../components/project"
import Seo from "../components/seo"

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          name
          page
          description
          app_url
          code_url
          tags
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <div
      id="intro"
      className="mx-6 mb-8 flex flex-col justify-center rounded-xl bg-gradient-to-br from-sky-500/75 via-teal-500/75 to-emerald-500/75 px-6 py-8 shadow-md backdrop-blur-3xl sm:mx-14 sm:mb-12 sm:px-8 xl:mx-36"
    >
      <StaticImage
        className="mb-8 self-center rounded-xl shadow-md"
        src="../../data/images/frog_on_flower.jpeg"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A frog on a flower"
      />
      <div className="mb-4 rounded-xl bg-white/30 px-3 pt-3 shadow-md ring-1 ring-inset ring-white/10">
        <h1 className="mb-4 self-center text-center text-3xl font-extrabold">
          Hey, I'm Robhilldev.
        </h1>
        <h1 className="mb-4 self-center text-center text-3xl font-extrabold">
          Welcome to my portfolio!
        </h1>
      </div>
      <div className="mt-2 space-x-6 self-center rounded-lg bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-2 px-4 shadow-md">
        <a
          className="font-bold text-black decoration-dotted"
          href="https://github.com/robhilldev"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            className="mr-1"
            src="../../data/images/github-icon.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt="Github icon"
          />
          Gitub
        </a>
        {/* <a
          className="decoration-dotted font-bold"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            className="mr-1"
            src="../../data/images/linkedin-icon.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt="Linkedin icon"
          />
          LinkedIn
        </a> */}
      </div>
    </div>
    <div className="mx-2 flex flex-row flex-wrap justify-between pb-2 sm:mx-10 sm:pb-4 xl:mx-32">
      {data.allProjectsJson.edges.map(({ node: project }) => (
        <div key={project.page} className="sm:basis-auto md:basis-1/2">
          <Project
            name={project.name}
            page={project.page}
            description={project.description}
            app_url={project.app_url}
            code_url={project.code_url}
            tags={project.tags}
          />
        </div>
      ))}
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
