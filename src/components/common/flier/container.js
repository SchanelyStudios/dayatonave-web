import React from "react";

import ClassNames from "classnames";

const FlierContainer = ({ children, className }) => {
  let classNames = ClassNames(
    className,
    "fliers"
  );
  return (
    <div class={classNames}>
      {children}
    </div>
  );
};

export default FlierContainer;
