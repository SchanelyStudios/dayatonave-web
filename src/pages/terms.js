import React from "react";

import Blob from "../components/common/blob";
import Layout from "../components/layout";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";

const TermsPage = () => {
  return (
    <Layout activeNavPath="/terms">
      <SEO title="Privacy and Terms of Use" />
      <main className="page">
        <SectionHeader>Privacy and Terms of Use</SectionHeader>
        <Blob>
          <p>Content coming soon!</p>
        </Blob>
      </main>
    </Layout>
  );
};

export default TermsPage;
