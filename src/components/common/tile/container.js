import React from "react";

import ClassNames from "classnames";

const TileContainer = ({ children }) => {
  let classNames = ClassNames("tiles");

  return (
    <ul className={classNames}>
      {children}
    </ul>
  );
};

export default TileContainer;
