import React, { useState } from 'react';
import './style.css'; 

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar por nombre"
        className="search-input"
      />
      <i className="search-icon">🔍</i>
    </div>
  );
};

export default SearchInput;
