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
    <div className="mx-6 mb-4 flex flex-col justify-center px-6 py-8 sm:mx-14 sm:mb-12 sm:px-8 xl:mx-36">
      <StaticImage
        className="self-center rounded-lg shadow-md"
        src="../../data/images/frog_on_flower.jpeg"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A frog on a flower"
      />
      <div className="pb-8">{/*for spacing*/}</div>
      <div className="rounded-lg bg-white/30 p-4 shadow-md ring-1 ring-inset ring-white/10">
        <h1 className="pb-4 text-center text-3xl font-extrabold">
          Hey, I'm Robhilldev.
        </h1>
        <h1 className="text-center text-2xl font-extrabold">
          Here are some projects I've worked on.
        </h1>
      </div>
      <div className="pb-6">{/*for spacing*/}</div>
      <div className="space-x-6 self-center rounded-md bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-2 px-4 shadow-md">
        <a
          className="font-bold text-black decoration-dotted"
          href="https://github.com/robhilldev"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            className="mr-1"
            src="../../data/images/github-logo.svg"
            layout="constrained"
            width={24}
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt="Github icon"
          />
          Gitub
        </a>
        {/* <a
          className="font-bold decoration-dotted"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            className="mr-1"
            src="../../data/images/linkedin-logo.svg"
            layout="constrained"
            width={24}
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt="Linkedin icon"
          />
          LinkedIn
        </a> */}
      </div>
    </div>
    <div className="flex flex-row flex-wrap justify-between px-2 pb-2 sm:px-10 sm:pb-4 xl:px-32">
      {data.allProjectsJson.edges.map(({ node: project }) => (
        <div
          key={project.page}
          className="px-4 pb-6 sm:basis-auto md:basis-1/2"
        >
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
