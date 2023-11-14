// Header.jsx

import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import X from "../../assets/x.svg";
function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} id="logo" alt="Logo" />
      </div>
      <div className="search">
        <button><img src={search} alt="Search" /></button>
        <input
          type="text"
          placeholder="Search movies & series"
        />
        <button ><img src={X} alt="Clear" id="x" /></button>
      </div>
    </div>
  );
}

export default Header;
