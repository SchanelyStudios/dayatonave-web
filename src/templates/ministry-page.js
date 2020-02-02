import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";
import Spread from "../components/common/spread";
import Slices from "../components/slices";

import ContentService from "../services/content.service";

export const query = graphql`
  fragment linkQuery on PRISMIC__Linkable {
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
  }
  query MinistryPageQuery($uid: String!) {
    prismic {
      ministry(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        ministry_name
        body{
          ... on PRISMIC_MinistryBodyBlob {
            type
            primary {
              title
              lead
              content
              call_to_action {
                ...linkQuery
              }
            }
          }
          ... on PRISMIC_MinistryBodySpread {
            type
            primary {
              title1
              lead
              content
              figure
              call_to_action {
                ...linkQuery
              }
            }
          }
          ... on PRISMIC_MinistryBodyFlier {
            type
            primary {
              title1
              content
              figure
              call_to_action {
                ...linkQuery
              }
            }
          }
          ... on PRISMIC_MinistryBodyTiles {
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
                ...linkQuery
              }
            }
          }
          __typename
        }
      }
    }
  }
`;

const MinistryPage = ({ data }) => {
  let copy = ContentService.ministryPage(data);

  return (
    <Layout activePath={`/events/${copy.slug}`}>
      <SEO title={copy.title} />
      <SectionHeader>
        {copy.title}
      </SectionHeader>
      <Spread figure={copy.thumbnail}>
        {copy.summary}
      </Spread>
      <Slices slices={copy.slices} />
    </Layout>
  );
}

export default MinistryPage;
