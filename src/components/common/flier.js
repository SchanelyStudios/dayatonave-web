import React from "react";

import ClassNames from "classnames";

import CTA from "./cta";
import Figure from "./figure";

const Flier = ({ children, figure, cta, className }) => {
  let classNames = ClassNames(
    className,
    "flier"
  );

  return (
    <div className={classNames}>
  		{(figure
        ? <Figure className="flier__figure" src={figure.src} alt={figure.alt} />
        : null
      )}
    	<div className="flier__content">
    		{children}
    		{(cta
          ? <CTA className="flier__cta" action={cta} label={cta.label} />
          : null
        )}
    	</div>
    </div>
  );
};

export default Flier;
