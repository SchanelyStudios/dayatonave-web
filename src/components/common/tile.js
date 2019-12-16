import React from "react";

import ClassNames from "classnames";

const Tile = ({ children, className, title, subtitle, type, figure }) => {
  let classNames = ClassNames(
    "tile",
    className,
    {
      [`tile--${type}`]: type,
    }
  );

  return (
    <li className={classNames}>
      {(figure
        ? (
          <div className="tile__figure">
            {figure}
          </div>
        ) : ""
      )}
      <h4 className="tile__name">
        {title}
      </h4>
      {(subtitle
        ? (
          <p class="tile__title">
            {subtitle}
          </p>
        ) : ""
      )}
      <div className="tile__copy">
        {children}
      </div>
    </li>
  )
};

export default Tile;
