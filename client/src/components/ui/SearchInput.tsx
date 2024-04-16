import React from 'react';

function SearchInput({ onSearch }) {
 return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
 );
}

export default SearchInput;