import React from "react";

import ClassNames from "classnames";

import SectionHeader from "./section-header";
import CTA from "./cta";

const Blob = ({ heading, lead, cta, className, children }) => {
  let classNames = ClassNames("blob", className);
  if (heading) {
    heading = (
      <SectionHeader level="2">
        {heading}
      </SectionHeader>
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
