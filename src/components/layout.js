/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/app.scss"

const Layout = ({ activeNavPath, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            subtitle
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          activeItem={activeNavPath}
          siteTitle={data.site.siteMetadata.title}
          siteSubTitle={data.site.siteMetadata.subtitle}
        />
        <main className="page">{children}</main>
        <footer>
          © {new Date().getFullYear()}, by Dayton Avenue Baptist Church. All rights reserved.
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
