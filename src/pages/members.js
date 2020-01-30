import React from "react";

import Blob from "../components/common/blob";
import Layout from "../components/layout";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";

const MembersMainPage = () => {
  return (
    <Layout activeNavPath="/members">
      <SEO title="Members' Portal" />
      <main className="page">
        <SectionHeader>Members' Portal</SectionHeader>
        <Blob>
          <p>Content coming soon!</p>
        </Blob>
      </main>
    </Layout>
  );
};

export default MembersMainPage;
