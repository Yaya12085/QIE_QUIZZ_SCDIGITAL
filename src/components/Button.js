import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <input className="btn" type="button" onClick={onClick} value={value} />
  );
};

export default Button;
