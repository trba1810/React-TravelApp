import React from "react";
import logo from "../images/react.png";

function Header() {
  return (
    <div className="pt-3 pl-2">
      <img
        src={logo}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>
      <span className="h2 pt-2 text-white-50">Travel App</span>
    </div>
  );
}

export default Header;
