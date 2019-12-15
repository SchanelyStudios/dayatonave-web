import React from "react";

import Blob from "../../components/common/blob";
import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

const PastoralTeachingPage = () => {
  return (
    <Layout activeNavPath="/ministries">
      <SEO title="Pastoral Teaching Ministry" />
      <main className="page">
        <SectionHeader>Pastoral Teaching Ministry</SectionHeader>
        <Blob>
          <p>Content coming soon!</p>
        </Blob>
      </main>
    </Layout>
  );
};

export default PastoralTeachingPage;
