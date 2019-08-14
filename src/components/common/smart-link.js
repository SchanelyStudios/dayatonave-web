import React from "react";
import { Link } from "gatsby";

const SmartLink = ({ path, href, children, target, title, className }) => {
  if (path) {
    return (
      <Link to={path} target={target} title={title} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} title={title} className={className}>
        {children}
      </a>
    );
  }

  return (
    <>
      {children}
    </>
  );
};

export default SmartLink;
