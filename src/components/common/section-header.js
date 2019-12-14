import React from "react";

import ClassNames from "classnames";

const SectionHeader = ({ level, children }) => {
  level = level || 1;

  let classNames = ClassNames(
    "section-header",
    {
      [`section-header--display-${level}`]: level,
    }
  );

  return (
    <h2 className={classNames}>
    	{children}
    </h2>
  )
};

export default SectionHeader;
