import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import X from "../../assets/x.svg";
function Header({ onSearch }) {
  const[queryUrl, setQueryUrl] = React.useState('');
  const handelSearch=()=>{
    onSearch(queryUrl);
    console.log(queryUrl);
  }
  const handelClear=()=>{
    setQueryUrl('');
    onSearch('superman');
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} id="logo" alt="Logo" />
      </div>
      <div className="search">
        <button onClick={handelSearch}><img src={search} alt="Search" /></button>
        <input
          type="text"
          placeholder="Search movies & series"
          value={queryUrl}
          onChange={(e) => setQueryUrl(e.target.value)}
        />
        <button onClick={handelClear}><img src={X} alt="Clear" id="x" /></button>
      </div>
    </div>
  );
}

export default Header;
