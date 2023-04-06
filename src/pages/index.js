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
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <div className="pt-8 px-4 mb-12 flex flex-col justify-center">
      <StaticImage
        className="mt-8 mb-8 self-center rounded-xl"
        src="../../data/images/frog_on_flower.jpeg"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A frog on a flower"
      />
      <h1 className="mb-2 text-3xl font-extrabold self-center">
        Hey, I'm Robhilldev.
      </h1>
      <h1 className="mb-2 text-3xl font-extrabold self-center">
        Welcome to my portfolio!
      </h1>
    </div>
    <div className="mx-10 my-5 flex flex-row flex-wrap justify-between lg:px-20">
      {data.allProjectsJson.edges.map(({ node: project }) => (
        <div className="mb-3 md:basis-1/2 sm:basis-auto">
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            app_url={project.app_url}
            code_url={project.code_url}
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
