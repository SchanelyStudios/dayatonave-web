import React from "react";

const Placeholdit = ({ size, text }) => {

  let src = `//placehold.it/${size}/a1aeb7/505d68`;
  src += text
    ? `?text=${encodeURI(text)}`
    : '';

  return (
    <img src={src} alt={text} />
  );
};

export default Placeholdit;
