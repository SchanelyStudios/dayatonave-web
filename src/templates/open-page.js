import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";
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
  query OpenPageQuery($uid: String!){
    prismic {
      test_open_page(uid:$uid, lang:"en-us") {
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
                ...linkQuery
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
                ...linkQuery
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
                ...linkQuery
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

const OpenPage = ({ data }) => {
  let { title, slices } = ContentService.openPage(data);
  return (
    <Layout activeNavPath="/">
      <SEO title={title} />
      <SectionHeader>
        {title}
      </SectionHeader>
      <Slices slices={slices} />
    </Layout>
  )
}

export default OpenPage;
