import React from "react";

import ClassNames from "classnames";

import SectionHeader from "./section-header";
import BlobLead from "./blob/lead";
import CTA from "./cta";

const Blob = ({ heading, centered, lead, cta, className, children }) => {
  let classNames = ClassNames(
    className,
    "blob",
    {
      [`blob--centered`]: centered
    }
  );

  if (heading) {
    heading = (
      <SectionHeader level="2">
        {heading}
      </SectionHeader>
    );
  }

  if (lead) {
    lead = (
      <BlobLead>
        {lead}
      </BlobLead>
    );
  }

  cta = cta
    ? <CTA className="blob__cta" label={cta.label} action={cta} />
    : null;

  return (
    <div className={classNames}>
      {heading}
      {lead}
    	<div className="blob__copy">
    		{children}
    	</div>
      {cta}
    </div>
  );
};

export default Blob;
