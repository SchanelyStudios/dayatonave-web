import React from "react";

import SectionHeader from "../components/common/section-header";
import Blob from "../components/common/blob";

const TempPage = ({ children }) => {
  if (!children) {
    children = (
      <p>
        Something unexpected happened and we couldn't load this page.
        Please try again or contact us to report the propblem.
      </p>
    );
  }

  return (
    <>
      <SectionHeader>Oops!</SectionHeader>
      <Blob>
        {children}
      </Blob>
    </>
  );
};

export default TempPage;
