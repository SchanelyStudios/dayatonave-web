import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContentService from '../services/content.service';

const AboutPage = () => {
  const copy = ContentService.about;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{copy.title}</h1>
      {copy.content}
      <Link to="/">Go to Home</Link>
    </Layout>
  )
}

export default AboutPage
