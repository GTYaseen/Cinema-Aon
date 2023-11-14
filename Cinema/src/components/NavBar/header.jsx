// Header.jsx

import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import X from "../../assets/x.svg";

function Header({ query, setQuery }) {
  const handleSearch = () => {
    // Trigger the API call when the search button is clicked
    fetchData();
  };

  const fetchData = async () => {
    const queryUrl = encodeURIComponent(query);
    const url = `https://www.omdbapi.com/?s=${queryUrl}&apikey=ef380c44`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.Response === "True") {
        setApiData(result);
        setLoading(false);
      } else {
        setApiData(null);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} id="logo" alt="Logo" />
      </div>
      <div className="search">
        <button onClick={handleSearch}><img src={search} alt="Search" /></button>
        <input
          type="text"
          placeholder="Search movies & series"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button><img src={X} alt="Clear" id="x" /></button>
      </div>
    </div>
  );
}

export default Header;
