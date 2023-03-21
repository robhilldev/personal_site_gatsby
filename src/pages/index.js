import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Project from "../components/project";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

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

// TODO: move this into json file in data folder
// TODO: then pull it in with GraphQL query like the project data
// const moreLinks = [
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

const IndexPage = ({ data }) => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../../data/images/frog_on_flower.jpeg"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A frog on a flower"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>Welcome to my portfolio!</h1>
    </div>
    <ul className={styles.list}>
      {data.allProjectsJson.edges.map(({ node: project }) => (
        <li key={project.name} className={styles.listItem}>
          <Project
            name={project.name}
            description={project.description}
            app_url={project.app_url}
            code_url={project.code_url}
          />
        </li>
      ))}
    </ul>
    {/* {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
