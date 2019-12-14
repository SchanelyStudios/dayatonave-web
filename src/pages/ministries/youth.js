import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import SectionHeader from "../../components/common/section-header";

const YouthMinistriesPage = () => {
  return (
    <Layout activeNavPath="/ministries">
      <SEO title="Youth Ministries" />
      <main className="page">
        <SectionHeader>Youth Ministries</SectionHeader>
        <p>Content coming soon!</p>
      </main>
    </Layout>
  );
};

export default YouthMinistriesPage;
