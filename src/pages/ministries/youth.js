import React from "react";

import Blob from "../../components/common/blob";
import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

const YouthMinistriesPage = () => {
  return (
    <Layout activeNavPath="/ministries">
      <SEO title="Youth Ministries" />
      <main className="page">
        <SectionHeader>Youth Ministries</SectionHeader>
        <Blob>
          <p>Content coming soon!</p>
        </Blob>
      </main>
    </Layout>
  );
};

export default YouthMinistriesPage;
