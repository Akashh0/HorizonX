import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch}) => {
    const [query, setquery] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== "") {
            onSearch(query);
            setquery("");
        }
    };

    return (
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name..." value={query} onChange={(e) => setquery(e.target.value)} />
        <button type="submit">Search</button>
      </form> 
    )
    };

export default SearchBar;