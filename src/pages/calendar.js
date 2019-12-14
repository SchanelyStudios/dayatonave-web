import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";

import ContentService from '../services/content.service';

const AboutPage = () => {
  const copy = ContentService.calendar;
  return (
    <Layout activeNavPath="/calendar">
      <SEO title={copy.title} />
      <main className="page">
        <SectionHeader>{copy.title}</SectionHeader>
        {copy.content}
      </main>
    </Layout>
  );
};

export default AboutPage;
