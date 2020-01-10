import React from "react";

import ClassNames from "classnames";

const FlierContainer = ({ children, className }) => {
  let classNames = ClassNames(
    className,
    "fliers"
  );
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default FlierContainer;
