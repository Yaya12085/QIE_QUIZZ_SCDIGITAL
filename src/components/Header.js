import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = ({ isBtn, title, subTitle }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 className="description">{title}</h1>
      <div className="header-bottom">
        {isBtn && (
          <Button
            value={"Tester maintenant mon QIE"}
            onClick={() => navigate("/quizz")}
          />
        )}
        <p className="sub-description">{subTitle}</p>
      </div>
    </div>
  );
};

export default Header;
