import React from "react";
import { graphql } from "gatsby";

import ContentService from "../services/content.service";

import Button from "../components/common/button";
import Features from "../components/common/features";
import Layout from "../components/layout";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";
import Spread from "../components/common/spread";
import Tile from "../components/common/tile";
import TileContainer from "../components/common/tile/container";
import TempPage from "../templates/temp-page";

const apiKey = process.env.GATSBY_GOOGLE_API;

export const query = graphql`
  query HomePageQuery {
    prismic {
      home_page(lang: "en-us", uid: "home") {
        about_link {
          _linkType
          ... on PRISMIC_About_page {
            page_title
            intro_heading
            _meta {
              uid
            }
          }
        }
        _meta {
          uid
        }
        about_video
        carousel {
          linked_item {
            _linkType
            ... on PRISMIC_Resource_page {
              resource_name
              cover_image
              _meta {
                uid
              }
              _linkType
              link_label
              description
            }
            ... on PRISMIC_Event_page {
              event_title
              event_summary
              _linkType
              _meta {
                uid
              }
              cover
              event_time_details
              event_date
            }
          }
        }
        current_schedule {
          ... on PRISMIC_Schedule {
            schedule_name
            schedule_description
            _meta {
              uid
            }
            body {
              ... on PRISMIC_ScheduleBodySchedule_block {
                type
                label
                primary {
                  block_heading
                }
                fields {
                  details
                  times
                }
              }
            }
          }
        }
        intro_heading
        intro_copy
        intro_lead
        location
        ministries_link {
          ... on PRISMIC_Ministry_page {
            page_title
            _meta {
              uid
            }
          }
        }
        page_title
        what_to_expect_heading
        what_to_expect_tiles {
          tile_content
          tile_image
          tile_title
        }
      }
    }
  }
`;

const IndexPage = (input) => {
  const copy = ContentService.home(input);

  if (!copy) {
    return (
      <Layout activeNavPath="/">
        <TempPage />
      </Layout>
    );
  }

  const {
    location,
    videoId,
    title,
    intro,
    current_schedule,
    what_to_expect,
    about_link,
    features
  } = copy;

  // Set up youtube embed as figure for intro
  const introFigure = {
    alt: "",
    src: null,
    element: (
      <iframe
        width="100%"
        height="320px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Live stream"
      />
    )
  };

  // Build Google Map Query
  const churchGeo = location.latitude + "%2C" + location.longitude;
  const centerGeo = location.latitude + "%2C" + (location.longitude + .1);
  const mapQuery = `key=${apiKey}&q=${churchGeo}&center=${centerGeo}&zoom=11`;

  return (
    <>
      <Layout activeNavPath="/">
        <SEO title={title} />
        <main className="page-home">
          <h1 aria-hidden="true">{title}</h1>

          <Features features={features} />

          <SectionHeader>{intro.title}</SectionHeader>
          <Spread
            className="page-home__intro"
            figure={introFigure}
            cta={{
              path: about_link,
              label: "Learn more"
            }}
          >
            <p className="lead">{intro.lead}</p>
            {intro.block}
          </Spread>

          <SectionHeader level="2">Location and Schedule</SectionHeader>
          <div className="page-home__schedule-location event-dets">
            <div className="event-dets__map">
              <iframe
                width="100%"
                height="580"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?${mapQuery}`}
                allowFullScreen
                title="Map of the church"
              />
            </div>
            <div className="event-dets__schedule schedule-group">
              {current_schedule.days.map(({ label, blocks }, i) => (
                <div className="schedule" key={i}>
                  <h4 className="schedule__label">{label}</h4>
                  <ul className="schedule__events">
                    {blocks.map(({ time, details }, j) => (
                      <li key={j} className="event">
                        <h5 className="event__time">{time}</h5>
                        <div className="event__details">
                          {details}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <SectionHeader level="2">{what_to_expect.title}</SectionHeader>
          <TileContainer className="page-home__what-to-expect">
            {what_to_expect.items.map(({ heading, content }, i) => (
              <Tile
                key={i}
                title={heading}
              >
                {content}
              </Tile>
            ))}
          </TileContainer>

          <Button centered={true} className="page-home__ministries-cta" path="/ministries">Our Ministries</Button>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
