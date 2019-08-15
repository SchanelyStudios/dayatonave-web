import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Placeholdit from "../components/common/placeholdit";

import ContentService from "../services/content.service";

export const query = graphql`
  query{
    prismic {
      ministry_page(uid:"ministries", lang:"en-us") {
        page_title
        intro_image
        intro_copy
        intro_heading
        ministries {
          ministry {
            ... on PRISMIC_Ministry {
              _meta {
                uid
              }
              ministry_name
              short_description
              thumbnail
            }
          }
        }
      }
    }
  }
`;

const MinistryPage = (input) => {
  const { title, intro, ministries } = ContentService.ministries(input);

  return (
    <Layout activeNavPath="/ministries">
      <SEO title={title} />
      <main className="page">
        <div className="intro-block">
          <div className="intro-block__content">
            <h3 className="intro-block__heading">
              {intro.heading}
            </h3>
            <div className="intro-block__copy">
              {intro.copy}
            </div>
          </div>
          <div className="intro-block__figure">
            <Placeholdit className="intro-block__image" size="600x400" text="FPO" />
          </div>
        </div>
        <h3 className="page__section-heading">Our Ministries</h3>
        <ul className="ministry-blocks">
          {ministries.map(({ name, intro, path, imageURL }, i) => {
            return (
              <li className="ministry-block" key={i}>
                <div className="ministry-block__content">
                  <h4 className="ministry-block__heading">
                    {name}
                  </h4>
                  <div className="ministry-block__copy">
                    {intro}
                  </div>
                  <Link className="ministry-block__more-link btn btn--uncentered" to={path}>
                    Learn More
                  </Link>
                </div>
                <div className="ministry-block__figure">
                  <Placeholdit className="ministry-block__image" size="400x400" text="FPO" />
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
}

export default MinistryPage;
