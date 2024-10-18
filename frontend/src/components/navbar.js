import "./navbar.css";
import React from "react";

import LogoLink from "./logoLink";

function Navbar() {
  return (
    <div className="navbar">
      <LogoLink />
      <div className="spacingDiv" />
      <div>Navbar</div>
    </div>
  );
}

export default Navbar;
