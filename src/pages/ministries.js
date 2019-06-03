import React from "react";
import { Link, graphql } from "gatsby";

import { RichText } from 'prismic-reactjs';

import Layout from "../components/layout";
import SEO from "../components/seo";

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

const bootstrap = (input) => {
  const page = input.data.prismic.ministry_page;
  const ministries = [];
  page.ministries.forEach(({ ministry }, i) => {
    console.log(ministry);
    ministries.push({
      name: RichText.asText(ministry.ministry_name),
      intro: RichText.render(ministry.short_description),
      imageURL: ministry.thumbnail.url,
      path: `/ministries/${ministry._meta.uid}`,
    });
  });

  return {
    title: RichText.asText(page.page_title),
    intro: {
      heading: RichText.asText(page.intro_heading),
      copy: RichText.render(page.intro_copy),
      imageURL: page.intro_image.url,
    },
    ministries,
  }
}

const MinistryPage = (input) => {
  const { title, intro, ministries } = bootstrap(input);

  return (
    <Layout activeNavPath="/ministries">
      <SEO title={title} />
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
          <img className="intro-block__image" src={intro.imageURL} alt="" />
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
                <img className="ministry-block__image" src={imageURL} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default MinistryPage;
