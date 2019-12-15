import React from "react";

import Layout from "../components/layout";
import SectionHeader from "../components/common/section-header";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className="page">
      <SectionHeader>Not Found</SectionHeader>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
);

export default NotFoundPage;
