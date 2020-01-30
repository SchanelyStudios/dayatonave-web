import React from "react";
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

const apiKey = process.env.GATSBY_GOOGLE_API;

const IndexPage = () => {
  console.table([{
      label: "GOOGLE_API",
      value: process.env.GATSBY_GOOGLE_API,
    }, {
      label: "TOOLKIT_URL",
      value: process.env.GATSBY_TOOLKIT_URL
    }
  ]);
  const copy = ContentService.home;
  return (
    <Layout activeNavPath="/">
      <SEO title={copy.title} />
      <main className="page page--full-bleed">
        <h1 aria-hidden="true">{copy.title}</h1>

        <div className="home__features figure">
          <Placeholdit size="1620x800" text="Carousel FPO" />
          {/* TODO: Add carousel styles and functionality */}
        </div>

        <SectionHeader level="2">{copy.intro.title}</SectionHeader>

        <Spread
          className="home__intro"
          figure={
            <YouTube className="home__intro__video" videoId={copy.videoId} />
          }
          cta={{ path: "/about", label: "Learn more" }}
        >
          {copy.intro.block}
        </Spread>
        <div className="home__location-times">
          <div className="home__location-times__map">
            <iframe
              width="100%"
              height="450"
              frameborder="0"
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJf0dr9meYQIgRRUe0PNj4j-c&key=${apiKey}`}
              allowfullscreen
              title="Map of the church"
            />
          </div>
          <div className="home__location-times__schedule schedule">
            <h3 className="schedule__name">{copy.current_schedule.name}</h3>
            <div className="schedule__description">
              <p>{copy.current_schedule.description}</p>
            </div>
            <ul className="schedule__days">
              {copy.current_schedule.days.map(({ label, blocks }, i) => (
                <li className="schedule__day day-schedule" klye={i}>
                  <h4 className="day-schedule__label">{label}</h4>
                  <ul className="day-schedule__time-blocks">
                    {blocks.map(({ time, details }, j) => (
                      <li key={j} className="day-schedule__time-block">
                        <h5 className="day-schedule__time-block__time">{time}</h5>
                        <div className="day-schedule__time-block__details">
                          {details}
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SectionHeader level="2">{copy.what_to_expect.title}</SectionHeader>
        <TileContainer className="home__what-to-expect">
          {copy.what_to_expect.items.map(({ heading, content }, i) => (
            <Tile
              key={i}
              title={heading}
              figure={<Placeholdit size="400x300" text="FPO" />}
            >
              {content}
            </Tile>
          ))}
        </TileContainer>

        <Button className="home__ministries-cta" path="/ministries">Our Ministries</Button>

      </main>
    </Layout>
  );
};

export default IndexPage;
