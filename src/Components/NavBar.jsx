import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <nav className="navbar">
      {/* Left side: Page Title & Search Bar */}
      <div className="navbar-left">
        <h1 className="navbar-title">HorizonX</h1>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Right side: Buttons */}
      <div className="navbar-right">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">About</button>
        <button className="nav-btn">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
