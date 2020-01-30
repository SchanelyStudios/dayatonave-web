import React from "react";

import ClassNames from "classnames";

import CTA from "./cta";
import Figure from "./figure";

const Tile = ({ children, className, title, subtitle, type, figure, cta }) => {
  let classNames = ClassNames(
    "tile",
    className,
    {
      [`tile--${type}`]: type,
    }
  );

  let figureType = type && type === "illustration"
    ? "svg"
    : null;

  return (
    <li className={classNames}>
      {(figure
        ? <Figure className="tile__figure" alt={figure.alt} src={figure.src} type={figureType} />
        : null
      )}
      <h4 className="tile__name">
        {title}
      </h4>
      {(subtitle && type === "facehole"
        ? (
          <p className="tile__title">
            {subtitle}
          </p>
        ) : null
      )}
      <div className="tile__copy">
        {children}
      </div>
      {(cta
        ? <CTA className="tile__cta" label={cta.label} action={cta}  />
        : null
      )}
    </li>
  )
};

export default Tile;
