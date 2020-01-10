import React from "react";

import ContentService from "../services/content.service";

import Layout from "../components/layout";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";
import Spread from "../components/common/spread";

const MediaPage = () => {
  const copy = ContentService.media;
  return (
    <Layout activeNavPath="/media">
      <SEO title={copy.title} />
      <main className="page">
        <SectionHeader>{copy.title}</SectionHeader>
        <div className="media-blocks">
          {copy.mediaBlocks.map(({ heading, alias, content, url, label }, i) => (
            <Spread
              className={`media-block media-block--${alias}`}
              key={i}
              flipped={i % 2}
              cta={{ href: url, label }}
            >
              <h3 className="type-display-2">
                {heading}
              </h3>
              <p className="media-block__copy">
                {content}
              </p>
            </Spread>
          ))}
        </div>
      </main>
    </Layout>
  )
};

export default MediaPage;
