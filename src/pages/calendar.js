import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContentService from '../services/content.service';

const AboutPage = () => {
  const copy = ContentService.calendar;
  return (
    <Layout activeNavPath="/calendar">
      <SEO title={copy.title} />
      <h1>{copy.title}</h1>
      {copy.content}
    </Layout>
  )
}

export default AboutPage
