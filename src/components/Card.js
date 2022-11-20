import React from "react";

const Card = ({ number, text }) => {
  return (
    <div className="small-card">
      <span>{number} </span>
      <span>{text} </span>
    </div>
  );
};

export default Card;
