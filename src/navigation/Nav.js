import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"} className="nav-link">
            <img src={require("../assets/images/logo.png")} alt="" />
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to={"/quizz"} className="nav-link">
            Faire mon test QIE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
