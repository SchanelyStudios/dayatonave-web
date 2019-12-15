import React from "react";

import ContentService from '../services/content.service';

import Layout from "../components/layout";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";

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
