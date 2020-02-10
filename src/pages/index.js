import React from "react";
import { graphql } from "gatsby";
import YouTube from 'react-youtube';

import ContentService from '../services/content.service';

import Button from "../components/common/button";
import Layout from "../components/layout";
import Placeholdit from "../components/common/placeholdit";
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

  // Set up youtube embed as figure for intro
  let introFigure = {
    alt: "",
    src: null,
    element: (
      <YouTube
        className="home__intro__video"
        videoId={copy.videoId}
        opts={{
          width: "100%",
          height: "320px"
        }}
      />
    )
  };

  // Build Google Map Query
  const churchGeo = copy.location.latitude + "%2C" + copy.location.longitude;
  const centerGeo = copy.location.latitude + "%2C" + (copy.location.longitude + .1);
  const mapQuery = `key=${apiKey}&q=${churchGeo}&center=${centerGeo}&zoom=11`;

  return (
    <>
      <Layout activeNavPath="/">
        <SEO title={copy.title} />
        <main className="page-home">
          <h1 aria-hidden="true">{copy.title}</h1>

          <div className="page-home__features figure">
            <Placeholdit size="1620x800" text="Carousel FPO" />
          </div>

          <SectionHeader level="2">{copy.intro.title}</SectionHeader>

          <Spread
            className="page-home__intro"
            figure={introFigure}
            cta={{ path: copy.about_link, label: "Learn more" }}
          >
            <p className="lead">{copy.intro.lead}</p>
            {copy.intro.block}
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
              {copy.current_schedule.days.map(({ label, blocks }, i) => (
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

          <SectionHeader level="2">{copy.what_to_expect.title}</SectionHeader>
          <TileContainer className="home__what-to-expect">
            {copy.what_to_expect.items.map(({ heading, content }, i) => (
              <Tile
                key={i}
                title={heading}
              >
                {content}
              </Tile>
            ))}
          </TileContainer>

          <Button centered={true} className="home__ministries-cta" path="/ministries">Our Ministries</Button>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
