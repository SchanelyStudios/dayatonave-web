import React from "react";

import Blob from "../../components/common/blob";
import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

const GivingOnlinePage = () => {
  return (
    <Layout activeNavPath="/about">
      <SEO title="About Giving Online" />
      <main className="page">
        <SectionHeader>About Giving Online</SectionHeader>
        <Blob>
          <p>Content coming soon!</p>
        </Blob>
      </main>
    </Layout>
  );
}

export default GivingOnlinePage;
