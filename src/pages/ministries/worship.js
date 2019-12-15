import React from "react";

import Blob from "../../components/common/blob";
import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

const WorshipPage = () => {
  return (
    <Layout activeNavPath="/ministries">
      <SEO title="Worship Ministry" />
      <main className="page">
        <SectionHeader>Worship Ministry</SectionHeader>
        <Blob>
          <p>Content coming soon!</p>
        </Blob>
      </main>
    </Layout>
  );
};

export default WorshipPage;
