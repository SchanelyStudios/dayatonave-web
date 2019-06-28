import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SmartLink from "../components/common/smart-link";

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
  return (
    <Layout activeNavPath="/">
      <SEO title={copy.title} />
      <h1 aria-hidden="true">{copy.title}</h1>
      <ul className="home__features">
        {copy.features.map(({ name, graphic, moreURL, morePath}, i) => (
          <li key={i}>
            <SmartLink href={moreURL} path={morePath}>
              {name}
              {graphic}
            </SmartLink>
          </li>
        ))}
      </ul>
      <div className="home__intro">
        {copy.introBlock}
        {copy.graphic}
      </div>
      <div className="home__location-times location-times">
        <div className="location-times__map">
          <iframe
            width="100%"
            height="450"
            frameborder="0"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJf0dr9meYQIgRRUe0PNj4j-c&key=${apiKey}`}
            allowfullscreen
            title="Map of the church"
          />
        </div>
        <div className="location-times__schedule schedule">
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
                    <li className="time-block">
                      <h5 className="time-block__time">{time}</h5>
                      <div className="time-block__details">
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
    </Layout>
  );
};

export default IndexPage;
