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
      <div className="bg-neutral-200">
        <main className="pt-6 sm:pt-10">{children}</main>
        <footer className="px-2 py-1">
          <div className="flex flex-row flex-wrap justify-center">
            <div>
              &middot;&nbsp;©&nbsp;{new Date().getFullYear()}
              &nbsp;&middot;&nbsp;Made by Robhilldev&nbsp;&middot;
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout;
