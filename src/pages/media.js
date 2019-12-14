import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";

import ContentService from "../services/content.service";

import Placeholdit from "../components/common/placeholdit";
import SmartLink from "../components/common/smart-link";

const MediaPage = () => {
  const copy = ContentService.media;
  return (
    <Layout activeNavPath="/media">
      <SEO title={copy.title} />
      <main className="page">
        <SectionHeader>{copy.title}</SectionHeader>
        <div className="media-blocks">
          {copy.mediaBlocks.map(({ heading, alias, content, url, label }, i) => (
            <div className={`media-block media-block--${alias}`} key={i}>
              <div className="media-block__content">
                <h2 className="media-block__heading">
                  {heading}
                </h2>
                <p className="media-block__copy">
                  {content}
                </p>
                <SmartLink className="media-block__button btn btn--inverse" href={url}>
                  {label}
                </SmartLink>
              </div>
              <div className="media-block__preview">
                <Placeholdit size="600x360" text="Media" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
};

export default MediaPage;
