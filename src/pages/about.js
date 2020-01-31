import React from "react";
import YouTube from 'react-youtube';

import ContentService from '../services/content.service';

import Layout from "../components/layout";
import Button from "../components/common/button";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";
import Spread from "../components/common/spread";
import SpreadLead from "../components/common/spread/lead";
import Tile from "../components/common/tile";
import TileContainer from "../components/common/tile/container";

export const query = graphql`
  query AboutPageQuery {
    prismic {
      about_page(lang: "en-us", uid: "about") {
        _meta {
          uid
        }
        about_us_video
        beliefs_heading
        beliefs_link {
          ... on PRISMIC_Test_open_page {
            title1
            summary
            _meta {
              uid
            }
          }
        }
        beliefs_summary {
          belief_copy
          belief_heading
          belief_icon
        }
        faqs_heading
        intro_copy
        intro_heading
        intro_lead
        page_title
        pastors_heading
        pastoral_team {
          pastoral_team_member {
            ... on PRISMIC_Empoyee {
              name
              position
              picture
            }
          }
        }
        faqs {
          answer
          question
        }
      }
    }
  }
`;

const AboutPage = (input) => {
  const copy = ContentService.about(input);
  console.log(copy);

  // Set up youtube embed as figure for intro
  let introFigure = {
    alt: "",
    src: null,
    element: (
      <YouTube
        className="about-page__intro__video"
        videoId={copy.videoId}
        opts={{
          width: "100%",
          height: "320px"
        }}
      />
    )
  };

  return (
    <Layout activeNavPath="/about">
      <SEO title={copy.title} />
      <main className="page about-page">
        <SectionHeader>{copy.intro.title}</SectionHeader>
        <Spread
          className="about-page__intro"
          lead={<SpreadLead>{copy.intro.lead}</SpreadLead>}
          figure={introFigure}
        >
          {copy.intro.copy}
        </Spread>

        <SectionHeader level="2">{copy.beliefs.heading}</SectionHeader>
        <TileContainer className="about-page__beliefs">
          {copy.beliefs.items.map(({ figure, label, content }, i) => (
            <Tile
              key={i}
              type="illustration"
              title={label}
              figure={figure}
            >
              {content}
            </Tile>
          ))}
        </TileContainer>

        <Button centered={true} className="about__beliefs-cta" path={copy.beliefs.link.path}>
          {copy.beliefs.link.label}
        </Button>

        <SectionHeader level="2">{copy.pastoral_team.heading}</SectionHeader>
        <TileContainer className="about-page__pastors">
          {copy.pastoral_team.pastors.map(({ name, position, figure }, i) => (
            <Tile
              key={i}
              type="facehole"
              title={name}
              subtitle={position}
              figure={figure}
            />
          ))}
        </TileContainer>

        <SectionHeader level="2">{copy.faqs.heading}</SectionHeader>
        <dl className="faqs">
          {copy.faqs.faqs.map(({ question, answer }) => (
            <div className="faq">
              <dt className="faq__question">{question}</dt>
              <dd className="faq__answer">{answer}</dd>
            </div>
          ))}
        </dl>
      </main>
    </Layout>
  );
};

export default AboutPage;
