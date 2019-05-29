import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContentService from '../services/content.service';

const IndexPage = () => {
  const copy = ContentService.home;
  return (
    <Layout activeNavPath="/">
      <SEO title={copy.title} />
      <h1>{copy.title}</h1>
      {copy.introBlock}
      {copy.graphic}
    </Layout> 
  )
}

export default IndexPage
