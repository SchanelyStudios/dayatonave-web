import React from "react";

import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

const DoctrinePage = () => {
  return (
    <Layout activeNavPath="/about">
      <SEO title="Doctrine" />
      <main className="page">
        <SectionHeader>Doctrine</SectionHeader>
        <p>Content coming soon!</p>
      </main>
    </Layout>
  );
}

export default DoctrinePage;
