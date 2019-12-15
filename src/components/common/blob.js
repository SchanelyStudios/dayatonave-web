import React from "react";

import ClassNames from "classnames";

const Blob = ({ lead, cta, className, children }) => {
  let classNames = ClassNames("blob", className);
  return (
    <div class={classNames}>
      {lead}
    	<div class="blob__copy">
    		{children}
    	</div>
      {cta}
    </div>
  );
};

export default Blob;
