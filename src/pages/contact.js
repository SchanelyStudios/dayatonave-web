import React from "react";

import ContentService from '../services/content.service';

import Layout from "../components/layout";
import Placeholdit from "../components/common/placeholdit";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";
import Spread from "../components/common/spread";
import SpreadCTA from "../components/common/spread/cta";

const AboutPage = () => {
  const copy = ContentService.contact;
  return (
    <Layout activeNavPath="/contact">
      <SEO title={copy.title} />
      <main className="page contact-page">
        <SectionHeader>{copy.title}</SectionHeader>
        <Spread figure={<Placeholdit size="1200x900" text="Map FPO" />}>
          <form className="contact-page__form" action="https://formspree.io/philschanely@gmail.com" method="POST">
            <ul className="fields">
              <li className="field">
                <label className="field__label">Email</label>
                <div className="field__control">
                  <input type="email" name="_replyto" />
                </div>
              </li>
              <li className="field">
                <label className="field__label">Subject</label>
                <div className="field__control">
                  <select name="subject">
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
                <label className="field__label">Message</label>
                <div className="field__control">
                  <textarea name="message"></textarea>
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

export default AboutPage;
