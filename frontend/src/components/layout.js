import "./layout.css";
import React from "react";

import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
