import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import X from "../../assets/x.svg";
function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} id="logo" />
      </div>
      <div className="search">
        <button><img src={search} /></button>
        <input type="text" placeholder="Search movies & series"/>
        <button ><img src={X} id="x" /></button>
      </div>
    </div>
  );
}

export default Header;
