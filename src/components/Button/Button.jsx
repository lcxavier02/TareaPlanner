import React from "react";

// eslint-disable-next-line react/prop-types
function Button({ text, color, height, width, textColor }) {
  const buttonClass = `${color} ${height} ${width} ${textColor} rounded-md text-center`;

  return <button className={buttonClass}>{text}</button>;
}

export default Button;
