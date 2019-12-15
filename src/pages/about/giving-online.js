import React from "react";

import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

const GivingOnlinePage = () => {
  return (
    <Layout activeNavPath="/about">
      <SEO title="About Giving Online" />
      <main className="page">
        <SectionHeader>About Giving Online</SectionHeader>
        <p>Content coming soon!</p>
      </main>
    </Layout>
  );
}

export default GivingOnlinePage;
