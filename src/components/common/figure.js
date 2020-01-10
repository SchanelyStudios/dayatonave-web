import React from "react";

import ClassNames from "classnames";

const Figure = ({ className, src, alt, type }) => {
  if (src && src !== "#") {
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
        <img className="figure__img" src={src} alt={alt} />
      </div>
    )
  }

  return "";
};

export default Figure;
