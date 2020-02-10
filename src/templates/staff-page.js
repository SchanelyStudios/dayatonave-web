import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Blob from "../components/common/blob";
import Figure from "../components/common/figure";
import SectionHeader from "../components/common/section-header";
import Slices from "../components/slices";
import TempPage from "./temp-page";

import ContentService from "../services/content.service";

export const query = graphql`
  query StaffPageQuery($uid: String!) {
    prismic {
      empoyee(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        biography
        name
        picture
        position
      }
    }
  }
`;

const StaffPage = ({ data }) => {
  const copy = ContentService.staffPage(data);

  if (!copy) {
    return (
      <Layout activeNavPath="/">
        <TempPage />
      </Layout>
    );
  }

  return (
    <Layout activePath={`/staff/${copy.slug}`}>
      <SEO title={copy.name} />
      <SectionHeader>
        {copy.name} <em>{copy.position}</em>
      </SectionHeader>
      <Figure src={copy.picture.src} alt={copy.picture.alt} />
      <Blob>
        {copy.biography}
      </Blob>
      <Slices slices={copy.slices} />
    </Layout>
  );
}

export default StaffPage;
