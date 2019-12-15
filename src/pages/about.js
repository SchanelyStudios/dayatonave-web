import React from "react";

import ContentService from '../services/content.service';

import Layout from "../components/layout";
import Placeholdit from "../components/common/placeholdit";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";
import Spread from "../components/common/spread";

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

        <div className="about-page__beliefs">
          <SectionHeader level="2">{copy.beliefs.heading}</SectionHeader>
          <ul className="about-page__beliefs__items">
            {copy.beliefs.items.map(({ label, content }, i) => (
              <li key={i} className="about-page__beliefs__item">
                <Placeholdit size="300x200" text="Icon" />
                <h4>{label}</h4>
                {content}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-page__pastoral-team">
          <SectionHeader level="2">{copy.pastoral_team.heading}</SectionHeader>
          <ul className="about-page__pastors">
            {copy.pastoral_team.pastors.map(({ name, title }, i) => (
              <li key={i} className="pastor">
                <div className="pastor__mug">
                  <Placeholdit size="200x200" text="Mug" />
                </div>
                <h4 className="pastor__name">{name}</h4>
                <p className="pastor__title">{title}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
