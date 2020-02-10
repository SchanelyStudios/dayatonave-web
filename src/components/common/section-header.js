import React from "react";

import ClassNames from "classnames";

const SectionHeader = ({ level, subtext, eyebrow, children }) => {
  level = level || 1;

  let classNames = ClassNames(
    "section-header",
    {
      [`section-header--display-${level}`]: level,
    }
  );

  let sub = subtext
    ? (
      <em className="section-header__sub">{subtext}</em>
    )
    : null;

  let brow = eyebrow
    ? (
      <em className="section-header__sub">{eyebrow}</em>
    )
    : null;

  return (
    <h2 className={classNames}>
      {brow}
    	{children}
      {sub}
    </h2>
  )
};

export default SectionHeader;
