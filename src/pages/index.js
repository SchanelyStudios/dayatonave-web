import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import YouTube from 'react-youtube';

import SmartLink from "../components/common/smart-link";
import Button from "../components/common/button";
import Placeholdit from "../components/common/placeholdit";
import SectionHeader from "../components/common/section-header";

import ContentService from '../services/content.service';

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
        <div className="home__intro">
          <YouTube  className="home__intro__video" videoId={copy.videoId} />
          <div className="home__intro__content">
            {copy.introBlock}
            <Button path="/about/">Learn more</Button>
          </div>
        </div>
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
        <div className="home__what-to-expect">
          <SectionHeader level="2">{copy.what_to_expect.title}</SectionHeader>
          <ul className="home__what-to-expect__grid">
            {copy.what_to_expect.items.map(({ heading, content }, i) => (
              <li key={i}>
                <Placeholdit size="400x300" text="FPO" />
                <h4>{heading}</h4>
                {content}
              </li>
            ))}
          </ul>
          <Button path="/ministries">Our Ministries</Button>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
