import React from "react";

import ClassNames from "classnames";

import Button from "./button";

const CTA = ({ action, label, className, children }) => {

  let classNames = ClassNames(
    className,
    "cta"
  );

  return (
    <Button href={action.href} path={action.path} className={classNames}>
      {label}
    </Button>
  );
};

export default CTA;
