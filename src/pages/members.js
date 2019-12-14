import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";

const MembersMainPage = () => {
  return (
    <Layout activeNavPath="/members">
      <SEO title="Members' Portal" />
      <main className="page">
        <SectionHeader>Members' Portal</SectionHeader>
        <p>Content coming soon!</p>
      </main>
    </Layout>
  );
};

export default MembersMainPage;
