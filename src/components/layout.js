/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main className="pt-6 sm:pt-10">{children}</main>
        <footer className="px-2 py-1">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="rounded-md bg-white/50 px-1 shadow-md backdrop-blur-3xl">
              &middot;&nbsp;©&nbsp;{new Date().getFullYear()}
              &nbsp;&middot;&nbsp;Made by Robhilldev&nbsp;&middot;
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
