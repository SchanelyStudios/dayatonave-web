import React from "react";

import ClassNames from "classnames";

const Flier = ({ children, figure, cta, className }) => {
  let classNames = ClassNames(
    className,
    "flier"
  );
  return (
    <div class={classNames}>
    	<div class="flier__figure">
    		{figure}
    	</div>
    	<div class="flier__content">
    		{children}
    		{cta}
    	</div>
    </div>
  );
};

export default Flier;
