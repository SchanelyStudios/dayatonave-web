import React from "react";
import { Link } from "gatsby";

import ClassNames from "classnames";

import LogoFull from "./logo/logo-full";
import LogoInline from "./logo/logo-inline";
import LogoWordmark from "./logo/logo-wordmark";

const Logo = ({ type, color, content }) => {

  let classNames = ClassNames(
    "logo",
    {
      [`logo--${color}`]: color,
      [`logo--${type}`]: type,
    }
  );

  let logo;
  switch(type) {
    case "wordmark":
      logo = <LogoWordmark />
      break;
    case "inline":
      logo = <LogoInline />
      break;
    default:
      logo = <LogoFull />
      break;
  }

  return (
    <div className={classNames}>
      <Link to="/">
        {logo}
      </Link>
      <h1 className="logo__text">{content}</h1>
    </div>
  );
}

export default Logo;
