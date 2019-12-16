import React from "react";

import ClassNames from "classnames";

const TileFigure = ({ children, className, type }) => {
  let classNames = ClassNames(
    "tile__figure",
    className,
    {
      [`tile--${type}`]: type,
    }
  );

  return (
    <div className={classNames}>
      {children}
    </div>
  )
};

export default TileFigure;
