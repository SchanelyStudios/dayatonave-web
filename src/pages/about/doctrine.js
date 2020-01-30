import React from "react";

import Blob from "../../components/common/blob";
import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

const DoctrinePage = () => {
  return (
    <Layout activeNavPath="/about">
      <SEO title="Doctrine" />
      <main className="page">
        <SectionHeader>Doctrine</SectionHeader>
        <Blob>
          <p>Content coming soon!</p>
        </Blob>
      </main>
    </Layout>
  );
}

export default DoctrinePage;
