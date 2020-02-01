import React from "react";
import { graphql } from "gatsby";

import Flier from "../components/common/flier";
import FlierContainer from "../components/common/flier/container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";
import Spread from "../components/common/spread";

import ContentService from "../services/content.service";

export const query = graphql`
  query {
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
              has_followup_page
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
        <SectionHeader>{intro.heading}</SectionHeader>
        <Spread figure={intro.figure}>
          {intro.copy}
        </Spread>
        <SectionHeader level="2">Our Ministries</SectionHeader>
        <FlierContainer className="ministry-blocks">
          {ministries.map(({ name, intro, path, figure, hasFollowupPage }, i) => (
            <Flier
              className="ministry-block"
              key={i}
              cta={hasFollowupPage ? {
                path,
                label: "Learn more"
              } : null}
              figure={figure}
            >
              <h4 className="type-display-3">
                {name}
              </h4>
              {intro}
            </Flier>
          ))}
        </FlierContainer>
      </main>
    </Layout>
  );
}

export default MinistryPage;
