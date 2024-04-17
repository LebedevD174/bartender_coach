/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import SearchInput from '../../ui/SearchInput';

type FilterDrinksProps = {
 setFilter: (filter: { category: string }) => void;
 onSearch: (query: string) => void; 
};

function FilterDrinks({ setFilter, onSearch }: FilterDrinksProps): JSX.Element {
 const onHandlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setFilter({ category: id });
 };

 return (
    <div className="FilterDrinks">
      <SearchInput onSearch={onSearch} /> 
      <p className="categoryFilt">Фильтр</p>
      <div className="container_filter">
        <div className="filter">
          <div className="filter-item">
            <select id="filter_category" onChange={onHandlerChange}>
              <option hidden>Крепость</option>
              <option value={0}>Все</option>
              <option value={1}>Безалкогольные</option>
              <option value={2}>Крепкие</option>
              <option value={3}>Слабоалкогольные</option>
            </select>
          </div>
        </div>
      </div>
    </div>
 );
}

export default FilterDrinks;
