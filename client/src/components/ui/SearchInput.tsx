import React from 'react';

function SearchInput({ onSearch }: { onSearch: (searchValue: string) => void }) : JSX.Element {
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