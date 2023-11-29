/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div>
        <main>{children}</main>
        <footer className="mx-4 mt-12">
          <div className="flex flex-row flex-wrap justify-center">
            <div>
              ©&nbsp;{new Date().getFullYear()}
              &nbsp;&middot;&nbsp;Built with&nbsp;
            </div>
            <div>
              <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
                Gatsby
              </a>
              &nbsp;&middot;&nbsp;
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                React
              </a>
              &nbsp;&middot;&nbsp;
              <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                GraphQL
              </a>
              &nbsp;&middot;&nbsp;
              <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
                TailwindCSS
              </a>
              .&nbsp;&nbsp;
            </div>
            <div>
              Hosted with&nbsp;
              <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
                Netlify
              </a>.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout;
