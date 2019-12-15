import React from "react";

import Layout from "../components/layout";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";

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
