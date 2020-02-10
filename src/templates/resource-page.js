import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";
import Blob from "../components/common/blob";
import Button from "../components/common/button";
import TempPage from "./temp-page";

import ContentService from "../services/content.service";

export const query = graphql`
  query ResourcePageQuery($uid: String!) {
    prismic {
      resource_page(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        cover_image
        description
        link_label
        resource_link {
          _linkType
          ... on PRISMIC__ExternalLink {
            url
            _linkType
          }
          ... on PRISMIC__FileLink {
            _linkType
            url
          }
          ... on PRISMIC__ImageLink {
            _linkType
            url
          }
        }
        resource_name
      }
    }
  }
`;

const ResourcePage = ({ data }) => {
  const copy = ContentService.resourcePage(data);

  if (!copy) {
    return (
      <Layout activeNavPath="/">
        <TempPage />
      </Layout>
    );
  }

  const {
    slug,
    title,
    description,
    link
  } = copy;

  return (
    <Layout activePath={`/resources/${slug}`}>
      <SEO title={title} />
      <SectionHeader>
        {title}
      </SectionHeader>
      <Blob>
        {description}
      </Blob>
      {link ? (
        <Button className="btn--center" href={link.url}>{link.label}</Button>
      ) : null}
    </Layout>
  );
}

export default ResourcePage;
