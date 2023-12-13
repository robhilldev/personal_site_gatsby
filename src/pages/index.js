import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Project from "../components/project";
import Seo from "../components/seo";

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          name
          description
          app_url
          code_url
          tags
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <div className="mb-8 mx-6 p-8 sm:mb-12 sm:mx-14 xl:mx-36 flex flex-col justify-center bg-gradient-to-br from-sky-500 via-teal-500 to-emerald-500 rounded-xl shadow-md">
      <StaticImage
        className="mb-8 self-center rounded-xl"
        src="../../data/images/frog_on_flower.jpeg"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A frog on a flower"
      />
      <h1 className="mb-4 text-3xl font-extrabold self-center text-center">
        Hey, I'm Robhilldev.
      </h1>
      <h1 className="mb-4 text-3xl font-extrabold self-center text-center">
        Welcome to my portfolio!
      </h1>
      <div className="mt-2 p-2 px-4 space-x-6 self-center bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-lg">
        <a
          className="decoration-dotted font-bold text-black"
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
    <div className="mx-2 mb-2 sm:mb-4 sm:mx-10 xl:mx-32 flex flex-row flex-wrap justify-between">
      {data.allProjectsJson.edges.map(({ node: project }) => (
        <div className="md:basis-1/2 sm:basis-auto">
          <Project
            key={project.page}
            name={project.name}
            description={project.description}
            app_url={project.app_url}
            code_url={project.code_url}
            tags={project.tags}
          />
        </div>
      ))}
    </div>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
