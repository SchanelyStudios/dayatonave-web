import React from "react";
import { graphql } from "gatsby";

import ContentService from '../services/content.service';
import formURL from "../config/formspree";

import Layout from "../components/layout";
import Placeholdit from "../components/common/placeholdit";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";
import Spread from "../components/common/spread";

const apiKey = process.env.GATSBY_GOOGLE_API;

export const query = graphql`
  query ContactPageQuery {
    prismic {
      home_page(lang: "en-us", uid: "home") {
        location
      }
    }
  }
`;

const ContactPage = (input) => {
  const copy = ContentService.contact(input);

  let map = (
    <Placeholdit size="1200x900" text="Map FPO" />
  );

  if (copy && copy.location) {
    // Build Google Map Query
    const churchGeo = copy.location.latitude + "%2C" + copy.location.longitude;
    const centerGeo = copy.location.latitude + "%2C" + copy.location.longitude;
    const mapQuery = `key=${apiKey}&q=${churchGeo}&center=${centerGeo}&zoom=11`;
    map = (
      <iframe
        width="100%"
        height="440"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?${mapQuery}`}
        allowFullScreen
        title="Map of the church"
      />
    );
  }

  const mapFigure = {
    element: map
  };

  return (
    <Layout activeNavPath="/contact">
      <SEO title="Contact Dayton Avenue Baptist Church" />
      <main className="page contact-page">
        <SectionHeader>Contact Us</SectionHeader>
        <Spread figure={mapFigure}>
          <form className="contact-page__form" action={formURL} method="POST">
            <ul className="fields">
              <li className="field">
                <label className="field__label" htmlFor="email">Email</label>
                <div className="field__control">
                  <input type="email" name="_replyto" id="email" />
                </div>
              </li>
              <li className="field">
                <label className="field__label" htmlFor="subject">Subject</label>
                <div className="field__control">
                  <select name="subject" id="subject">
                    <option>General inquiry</option>
                    <option>Contact senior pastor</option>
                    <option>Contact executive pastor</option>
                    <option>Contact youth pastor</option>
                    <option>Contact children's pastor</option>
                    <option>Contact worship pastor</option>
                  </select>
                </div>
              </li>
              <li className="field">
                <label className="field__label" htmlFor="message">Message</label>
                <div className="field__control">
                  <textarea name="message" id="message"></textarea>
                </div>
              </li>
            </ul>
            <button type="submit">Send</button>
          </form>
        </Spread>
      </main>
    </Layout>
  );
};

export default ContactPage;
