import React from "react";

import ContentService from "../../services/content.service";

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
        <div className="children__details">
          {details}
        </div>
        <div className="children__visitors-schedule">
          <div className="children__visitors">
            {visitors}
          </div>
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
          <h3>Programs</h3>
          <ul className="ministry-blocks">
            {programs.map(({ title, description }, i) => (
              <li key={i} className="ministry-block">
                <div className="ministry-block__figure">
                  <Placeholdit className="ministry-block__image" size="400x300" text="FPO" />
                </div>
                <div className="ministry-block__content">
                  <h4 className="ministry-block__heading">{title}</h4>
                  <p className="ministry-block__copy">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="children__resources">
          {resources}
        </div>
      </main>
    </Layout>
  );
};

export default ChildrensMinistriesPage;
