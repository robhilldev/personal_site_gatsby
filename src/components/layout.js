/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="px-4">
          <div className="flex flex-row flex-wrap justify-center">
            <div>
              ©&nbsp;{new Date().getFullYear()}
              &nbsp;&middot;&nbsp;Built with&nbsp;
            </div>
            <div>
              <a href="https://www.gatsbyjs.com">
                Gatsby
              </a>&nbsp;&middot;&nbsp;
              <a href="https://react.dev/">
                React
              </a>&nbsp;&middot;&nbsp;
              <a href="https://graphql.org/">
                GraphQL
              </a>&nbsp;&middot;&nbsp;
              <a href="https://tailwindcss.com">
                TailwindCSS
              </a>.
            </div>
            {/* <div>
              Hosted on
              <a href="https://www.digitalocean.com">
                Digital Ocean
              </a>.
            </div> */}
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout;
