import React from "react";

import Layout from "../components/layout";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";

const TermsPage = () => {
  return (
    <Layout activeNavPath="/terms">
      <SEO title="Privacy and Terms of Use" />
      <main className="page">
        <SectionHeader>Privacy and Terms of Use</SectionHeader>
        <p>Content coming soon!</p>
      </main>
    </Layout>
  );
};

export default TermsPage;
