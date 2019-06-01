import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";

import { RichText } from 'prismic-reactjs';

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContentService from '../services/content.service';

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query{
        prismic {
          allMinistrys {
            edges {
              node {
                ministry_name
                short_description
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log("data", data);
      const prismicMinistries = data.prismic.allMinistrys.edges;
      const copy = ContentService.ministries;
      console.log("prismicMinistries", prismicMinistries);
      return (
        <Layout activeNavPath="/ministries">
          <SEO title={copy.title} />
          <div className="intro-block">
            <div className="intro-block__content">
              <h3 className="intro-block__heading">
                {copy.intro.heading}
              </h3>
              <div className="intro-block__copy">
                {copy.intro.copy}
              </div>
            </div>
            <div className="intro-block__figure">
              <img className="intro-block__image" src={copy.intro.imageURL} alt="" />
            </div>
          </div>
          <h3 className="page__section-heading">Our Ministries</h3>
          <ul className="ministry-blocks">
            {prismicMinistries.map(({ node }, i) => {
              console.log(node);
              const name = RichText.asText(node.ministry_name),
                intro = RichText.render(node.short_description),
                imageURL = "//placehold.it/400x400/a1aeb7/505d68?text=FPO",
                path = `/ministies/${node._meta.uid}`;
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
    }}
  />
);

export default AboutPage;
