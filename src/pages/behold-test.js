import React from "react";

// import Button from "../components/common/button";
// import Layout from "../components/layout";
// import Placeholdit from "../components/common/placeholdit";
import SectionHeader from "../components/common/section-header";
import Blob from "../components/common/blob";
import Flier from "../components/common/flier";
import FlierContainer from "../components/common/flier/container";
// import SEO from "../components/seo";
// import SmartLink from "../components/common/smart-link";
import Spread from "../components/common/spread";
import SpreadLead from "../components/common/spread/lead";
import Tile from "../components/common/tile";
import TileContainer from "../components/common/tile/container";

import ContentService from "../services/content.service";

export const query = graphql`
  query {
    prismic {
      test_open_page(uid:"behold-the-lamb-2019", lang:"en-us") {
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
                  slug
                  _meta{
                    uid
                  }
                }
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
                  slug
                  _meta{
                    uid
                  }
                }
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
                  slug
                  _meta{
                    uid
                  }
                }
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
                  slug
                  _meta{
                    uid
                  }
                }
              }
            }
          }
          __typename
        }
      }
    }
  }
`;

const BeholdTestPage = ({ data }) => {
  let { title, slices } = ContentService.beholdTest(data);
  return (
    <>
      <SectionHeader>
        {title}
      </SectionHeader>
      {slices.map((slice, i) => {
        let content;

        switch (slice.type) {
          case "spread":
            content = (
              <div key={i}>
                <SectionHeader level="2">
                  {slice.title}
                </SectionHeader>
                <Spread
                  key={i}
                  lead={<SpreadLead>{slice.lead}</SpreadLead>}
                  figure={slice.figure}
                  cta={slice.cta}
                >
                  {slice.content}
                </Spread>
              </div>
            );
          break;
          case "flier":
            content = (
              <div key={i}>
                <FlierContainer>
                  <Flier title={slice.title} figure={slice.figure} cta={slice.cta}>
                    {slice.content}
                  </Flier>
                </FlierContainer>
              </div>
            );
          break;
          case "tiles":
            content = (
              <div key={i}>
                <SectionHeader level="2">
                  {slice.title}
                </SectionHeader>
                <TileContainer>
                  {slice.tiles.map((tile, i) => (
                    <Tile
                      key={i}
                      title={tile.title}
                      subtitle={tile.subtitle}
                      figure={tile.figure}
                      type={tile.type}
                      cta={tile.cta}
                    >
                      {tile.content}
                    </Tile>
                  ))}
                </TileContainer>
              </div>
            );
          break;
          default:
            content = (
              <Blob key={i} heading={slice.title} cta={slice.cta}>
                {slice.content}
              </Blob>
            );
          break;
        }

        return content;
      })}
    </>
  )
}

export default BeholdTestPage;
