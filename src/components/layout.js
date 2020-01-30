/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ activeNavPath, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <link type="text/css" rel="stylesheet" href={`${process.env.GATSBY_TOOLKIT_URL}/assets/toolkit/styles/toolkit.css`} />
        	<script src="https://kit.fontawesome.com/befe9b5d4b.js" crossorigin="anonymous"></script>
        </Helmet>
        <Header
          activeItem={activeNavPath}
          siteTitle={data.site.siteMetadata.title}
        />
        {children}
        <Footer
          siteTitle={data.site.siteMetadata.title}
        />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
