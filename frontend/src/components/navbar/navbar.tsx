import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <Link to="/" className="navLink">
          Home
        </Link>
      </div>
      <div className="navRight">
        <Link to="/dashboard" className="navLink">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
