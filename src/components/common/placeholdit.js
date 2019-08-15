import React from "react";

const Placeholdit = ({ src, size, text, className }) => {

  if (!src) {
    src = `//placehold.it/${size}/a1aeb7/505d68`;
    src += text
      ? `?text=${encodeURI(text)}`
      : '';
  }

  return (
    <img src={src} alt={text} className={className} />
  );
};

export default Placeholdit;
