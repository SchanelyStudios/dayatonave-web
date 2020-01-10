import React from "react";

import ContentService from '../services/content.service';

import Layout from "../components/layout";
import Placeholdit from "../components/common/placeholdit";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";
import Spread from "../components/common/spread";
import Tile from "../components/common/tile";
import TileContainer from "../components/common/tile/container";

const AboutPage = () => {
  const copy = ContentService.about;
  return (
    <Layout activeNavPath="/about">
      <SEO title={copy.title} />
      <main className="page about-page">
        <SectionHeader>{copy.title}</SectionHeader>
        <Spread className="about-page__intro" figure={<Placeholdit size="600x400" text="FPO" />}>
          {copy.intro}
        </Spread>

        <SectionHeader level="2">{copy.beliefs.heading}</SectionHeader>
        <TileContainer className="about-page__beliefs">
          {copy.beliefs.items.map(({ label, content }, i) => (
            <Tile
              key={i}
              type="illustration"
              title={label}
              figure={<Placeholdit size="300x200" text="Icon" />}
            >
              {content}
            </Tile>
          ))}
        </TileContainer>

        <SectionHeader level="2">{copy.pastoral_team.heading}</SectionHeader>
        <TileContainer className="about-page__pastors">
          {copy.pastoral_team.pastors.map(({ name, title }, i) => (
            <Tile
              key={i}
              type="facehole"
              title={name}
              subtitle={title}
            />
          ))}
        </TileContainer>
      </main>
    </Layout>
  );
};

export default AboutPage;
