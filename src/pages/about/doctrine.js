import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const DoctrinePage = () => {
  return (
    <Layout activeNavPath="/about">
      <SEO title="Doctrine" />
      <main className="page">
        <h1>Doctrine</h1>
        <p>Content coming soon!</p>
      </main>
    </Layout>
  );
}

export default DoctrinePage;
