import React from "react";
import ClassNames from "classnames";

const Spread = ({ figure, flipped, children, className, cta }) => {
  let classNames = ClassNames(
    className,
    "spread",
    {
      "spread--flipped": flipped
    }
  )

  return (
    <div className={classNames}>
    	<div className="spread__figure">
    		{figure}
    	</div>
    	<div className="spread__content">
    		<div className="spread__content__copy">
    			{children}
    		</div>
        {cta}
    	</div>
    </div>
  );
};

export default Spread;
