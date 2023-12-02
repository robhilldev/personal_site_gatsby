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
    <div className="mb-12 mx-8 px-8 py-8 pb-12 sm:mx-14 sm:mb-20 lg:mx-36 space-y-4 flex flex-col justify-center bg-gradient-to-br from-sky-500 via-teal-500 to-emerald-500 rounded-xl shadow-md">
      <StaticImage
        className="mt-4 mb-4 self-center rounded-xl"
        src="../../data/images/frog_on_flower.jpeg"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A frog on a flower"
      />
      <h1 className="mb-2 text-3xl font-extrabold self-center text-center">
        Hey, I'm Robhilldev.
      </h1>
      <h1 className="mb-2 text-3xl font-extrabold self-center text-center">
        Welcome to my portfolio!
      </h1>
    </div>
    <div className="mx-4 my-5 sm:mx-10 lg:mx-32 flex flex-row flex-wrap justify-between">
      {data.allProjectsJson.edges.map(({ node: project }) => (
        <div className="md:basis-1/2 sm:basis-auto">
          <Project
            key={project.name}
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
