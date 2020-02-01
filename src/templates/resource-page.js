import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";
import Blob from "../components/common/blob";
import Button from "../components/common/button";

import ContentService from "../services/content.service";

export const query = graphql`
  query ResourcePageQuery {
    prismic {
      resource_page(lang: "en-us", uid: "church-constitution") {
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
  let copy = ContentService.resourcePage(data);

  return (
    <Layout activePath={`/resources/${copy.slug}`}>
      <SEO title={copy.title} />
      <SectionHeader>
        {copy.title}
      </SectionHeader>
      <Blob>
        {copy.description}
      </Blob>
      <Button className="btn--center" href={copy.link.url}>{copy.link.label}</Button>
    </Layout>
  );
}

export default ResourcePage;
