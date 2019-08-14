import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContentService from '../services/content.service';

const AboutPage = () => {
  const copy = ContentService.media;
  return (
    <Layout activeNavPath="/media">
      <SEO title={copy.title} />
      <main className="page">
        <h2 className="page__heading">{copy.title}</h2>
        <div className="media-blocks">
          {copy.mediaBlocks.map(({ heading, alias, content }, i) => (
            <div className={`media-block media-block--${alias}`} key={i}>
              <div className="media-block__content">
                <h2 className="media-block__heading">
                  {heading}
                </h2>
                <p className="media-block__copy">
                  {content}
                </p>
                <a className="media-block__button btn btn--inverse" href={"//example.com"}>
                  Check it out
                </a>
              </div>
              <div className="media-block__preview">
                <img src="//placehold.it/600x360/a1aeb7/505d68?text=Media" alt="" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
