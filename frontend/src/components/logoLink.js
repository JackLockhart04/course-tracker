import React from "react";
import "./logoLink.css"; // Optional: Add styles for the logo link

function LogoLink() {
  return (
    <a href="http://localhost:3000/" className="logoLink">
      <img src="/logo.png" alt="Logo" className="logoImage" />
    </a>
  );
}

export default LogoLink;
