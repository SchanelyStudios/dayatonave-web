import React from "react";
import YouTube from 'react-youtube';

import ContentService from '../services/content.service';

import Button from "../components/common/button";
import Layout from "../components/layout";
import Placeholdit from "../components/common/placeholdit";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";
import SmartLink from "../components/common/smart-link";
import Spread from "../components/common/spread";
import Tile from "../components/common/tile";
import TileContainer from "../components/common/tile/container";

// export const query = graphql`
//   query{
//     prismic {
//       home_page(uid:"home", lang:"en-us") {
//         page_title
//         intro_copy
//         intro_heading
//         about_video
//       }
//     }
//   }
// `;

const apiKey = process.env.GOOGLE_API;

const IndexPage = () => {
  const copy = ContentService.home;
  console.log(copy);
  return (
    <Layout activeNavPath="/">
      <SEO title={copy.title} />
      <main className="page page--full-bleed">
        <h1 aria-hidden="true">{copy.title}</h1>

        <div className="home__features">
          <SmartLink>
            <Placeholdit size="1620x1000" text="Carousel FPO" />
          </SmartLink>
          {/* TODO: Add carousel styles and functionality */}
          {/*<ul className="home__feature-list">
            {copy.features.map(({ name, graphic, moreURL, morePath}, i) => (
              <li key={i}>
                <SmartLink href={moreURL} path={morePath}>
                  {name}
                  {graphic}
                </SmartLink>
              </li>
            ))}
          </ul>*/}
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
              {copy.current_schedule.days.map(({ label, blocks }) => (
                <li className="schedule__day day-schedule">
                  <h4 className="day-schedule__label">{label}</h4>
                  <ul className="day-schedule__time-blocks">
                    {blocks.map(({ time, details }) => (
                      <li className="day-schedule__time-block">
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
