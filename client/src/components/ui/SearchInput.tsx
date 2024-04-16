import React from 'react';

function SearchInput({ onSearch }) {
 return (
      <>
       <p className="categoryFilt">Поиск</p>
      <input
        type="text"
        placeholder="Поиск..."
        onChange={(e) => onSearch(e.target.value)}
      />
      </>
 );
}

export default SearchInput;