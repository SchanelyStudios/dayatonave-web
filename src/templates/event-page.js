import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";
import Blob from "../components/common/blob";
import BlobLead from "../components/common/blob/lead";
import Figure from "../components/common/figure";
import Slices from "../components/slices";
import TempPage from "./temp-page";

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
    ... on PRISMIC_Event_page{
      event_title
      _meta{
        uid
      }
    }
  }
  query EventPageQuery($uid: String!) {
    prismic {
      event_page(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        event_title
        event_summary
        cover
        event_date
        event_time_details
        body{
          ... on PRISMIC_Event_pageBodyBlob {
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
          ... on PRISMIC_Event_pageBodySpread {
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
          ... on PRISMIC_Event_pageBodyFlier {
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
          ... on PRISMIC_Event_pageBodyTiles {
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

const EventPage = ({ data }) => {
  const copy = ContentService.eventPage(data);

  if (!copy) {
    return (
      <Layout activeNavPath="/">
        <TempPage />
      </Layout>
    );
  }

  return (
    <Layout activePath={`/events/${copy.slug}`}>
      <SEO title={copy.title} />
      <SectionHeader eyebrow={copy.date.format("MMMM D, YYYY")}>
        {copy.title}
      </SectionHeader>
      <Blob lead={<BlobLead>{copy.time_details}</BlobLead>}>
        <Figure src={copy.cover.src} alt={copy.cover.alt} />
        {copy.summary}
      </Blob>
      <Slices slices={copy.slices} />
    </Layout>
  );
}

export default EventPage;
