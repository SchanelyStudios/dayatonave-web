import React from "react";

import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

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
