import React from "react";

import Button from "../button";

const SpreadCTA = ({ action, href, path, children }) => {

  return (
    <Button action={action} href={href} path={path} className="spread__content__cta">
      {children}
    </Button>
  );
};

export default SpreadCTA;
