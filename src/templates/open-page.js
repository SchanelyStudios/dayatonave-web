import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";
import Slices from "../components/slices";
import TempPage from "./temp-page";

import ContentService from "../services/content.service";

export const query = graphql`
  fragment openPageLinkQuery on PRISMIC__Linkable {
    _linkType
    ... on PRISMIC__ExternalLink{
      url
    }
    ... on PRISMIC__FileLink{
      name
      url
      size
    }
    ... on PRISMIC_Test_open_page{
      title1
      _meta{
        uid
      }
    }
    ... on PRISMIC_Event_page{
      event_title
      _meta{
        uid
      }
    }
  }
  query OpenPageQuery($uid: String!){
    prismic {
      test_open_page(uid:$uid, lang:"en-us") {
        _meta {
          uid
        }
        title1
        summary
        cover
        body{
          ... on PRISMIC_Test_open_pageBodyBlob {
            type
            primary {
              title
              lead
              content
              call_to_action {
                ...openPageLinkQuery
              }
            }
          }
          ... on PRISMIC_Test_open_pageBodySpread {
            type
            primary {
              title1
              lead
              content
              figure
              call_to_action {
                ...openPageLinkQuery
              }
            }
          }
          ... on PRISMIC_Test_open_pageBodyFlier {
            type
            primary {
              title1
              content
              figure
              call_to_action {
                ...openPageLinkQuery
              }
            }
          }
          ... on PRISMIC_Test_open_pageBodyTiles {
            type
            primary{
              title1
              introduction
              tile_type
            }
            fields {
              figure
              label
              sublabel
              content
              call_to_action {
                ...openPageLinkQuery
              }
            }
          }
          __typename
        }
      }
    }
  }
`;

const OpenPage = ({ data }) => {
  const copy = ContentService.openPage(data);

  if (!copy) {
    return (
      <Layout activeNavPath="/">
        <TempPage />
      </Layout>
    );
  }

  const { title, slices, slug } = copy;

  return (
    <Layout activeNavPath={`/${slug}`}>
      <SEO title={title} />
      <SectionHeader>
        {title}
      </SectionHeader>
      <Slices slices={slices} />
    </Layout>
  )
}

export default OpenPage;
