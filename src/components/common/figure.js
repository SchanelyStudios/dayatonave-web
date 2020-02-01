import React from "react";

import ClassNames from "classnames";

const Figure = ({ className, element, src, alt, type }) => {
  alt = alt || "";

  let classNames = ClassNames(
    className,
    "figure",
    {
      [`figure--${type}`]: type
    }
  );

  return (
    <div className={classNames}>
    {element
      ? element
      : (
        <img className="figure__img" src={src} alt={alt} />
      )}
    </div>
  );
};

export default Figure;
