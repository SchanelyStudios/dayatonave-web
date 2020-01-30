import React from "react";

import ContentService from "../../services/content.service";

import Blob from "../../components/common/blob";
import Flier from "../../components/common/flier";
import FlierContainer from "../../components/common/flier/container";
import Layout from "../../components/layout";
import Placeholdit from "../../components/common/placeholdit";
import Schedule from "../../components/common/schedule";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";
import Spread from "../../components/common/spread";

const ChildrensMinistriesPage = () => {
  const { title, overview, values, details, current_schedule, programs, visitors, resources } = ContentService.childrensMinistries;

  return (
    <Layout activeNavPath="/ministries">
      <SEO title="Children's Ministries" />
      <main className="page children-page">
        <SectionHeader>{title}</SectionHeader>
        <Spread className="children__intro" flipped={true} figure={<Placeholdit size="600x400" text="FPO" />}>
          <p className="lead">
            {overview}
          </p>
          {values}
        </Spread>

        <Blob className="children__details">
          {details}
        </Blob>

        <div className="children__visitors-schedule">
          <Blob className="children__visitors" heading={visitors.title}>
            {visitors.content}
          </Blob>
          <div className="children__schedule">
            <SectionHeader level={2}>{current_schedule.name}</SectionHeader>
            <div className="schedule__description">
              <p>{current_schedule.description}</p>
            </div>
            <div className="schedule__days">
              {current_schedule.days.map(({ label, events }, i) => (
                <Schedule key={i} label={label} events={events} />
              ))}
            </div>
          </div>
        </div>

        <div className="children__programs">
          <SectionHeader level={2}>Programs</SectionHeader>
          <FlierContainer className="ministry-blocks">
            {programs.map(({ title, description }, i) => (
              <Flier
                key={i}
                className="ministry-block"
                figure={<Placeholdit className="ministry-block__image" size="400x300" text="FPO" />}
              >
                <h4>{title}</h4>
                <p>{description}</p>
              </Flier>
            ))}
          </FlierContainer>
        </div>

        <Blob className="children__resources" heading={resources.title}>
          {resources.content}
        </Blob>
      </main>
    </Layout>
  );
};

export default ChildrensMinistriesPage;
