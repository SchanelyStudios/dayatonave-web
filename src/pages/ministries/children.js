import React from "react";

import ContentService from "../../services/content.service";

import Blob from "../../components/common/blob";
import Flier from "../../components/common/flier";
import FlierContainer from "../../components/common/flier/container";
import Layout from "../../components/layout";
import Placeholdit from "../../components/common/placeholdit";
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
          <Blob className="children__visitors">
            {visitors}
          </Blob>
          <div className="children__schedule schedule">
            <h3 className="schedule__name">{current_schedule.name}</h3>
            <div className="schedule__description">
              <p>{current_schedule.description}</p>
            </div>
            <ul className="schedule__days">
              {current_schedule.days.map(({ label, blocks }, i) => (
                <li key={i} className="schedule__day day-schedule">
                  <h4 className="day-schedule__label">{label}</h4>
                  <ul className="day-schedule__time-blocks">
                    {blocks.map(({ time, details }, j) => (
                      <li key={j} className="day-schedule__time-block">
                        <h5 className="day-schedule__time-block__time">{time}</h5>
                        <div className="day-schedule__time-block__details">
                          {details}
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="children__programs">
          <SectionHeader>Programs</SectionHeader>
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
        <Blob className="children__resources">
          {resources}
        </Blob>
      </main>
    </Layout>
  );
};

export default ChildrensMinistriesPage;
