import React from "react";

import ClassNames from "classnames";

const TileContainer = ({ children, lead }) => {
  let classNames = ClassNames("tiles");

  lead = lead ? (
    <div className="lead lead--centered">
      {lead}
    </div>
  ) : null;

  return (
    <>
      {lead}
      <ul className={classNames}>
        {children}
      </ul>
    </>
  );
};

export default TileContainer;
