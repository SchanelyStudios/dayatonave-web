import React from "react";
import ClassNames from "classnames";

import CTA from "./cta";
import Figure from "./figure";

const Spread = ({ figure, lead, flipped, children, className, cta }) => {
  let classNames = ClassNames(
    className,
    "spread",
    {
      "spread--flipped": flipped
    }
  );

  return (
    <div className={classNames}>
      {(figure
        ? <Figure className="spread__figure" element={figure.element} src={figure.src} alt={figure.alt} />
        : null
      )}
    	<div className="spread__content">
        {lead}
    		<div className="spread__content__copy">
    			{children}
    		</div>
        {(cta
          ? <CTA className="spread__content__cta" action={cta} label={cta.label} />
          : null
        )}
    	</div>
    </div>
  );
};

export default Spread;
