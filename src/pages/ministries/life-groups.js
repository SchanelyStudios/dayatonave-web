import React from "react";

import Blob from "../../components/common/blob";
import Layout from "../../components/layout";
import SectionHeader from "../../components/common/section-header";
import SEO from "../../components/seo";

const LifeGroupsPage = () => {
  return (
    <Layout activeNavPath="/ministries">
      <SEO title="LifeGroups" />
      <main className="page">
        <SectionHeader>LifeGroups</SectionHeader>
        <Blob>
          <p>Content coming soon!</p>
        </Blob>
      </main>
    </Layout>
  );
};

export default LifeGroupsPage;
