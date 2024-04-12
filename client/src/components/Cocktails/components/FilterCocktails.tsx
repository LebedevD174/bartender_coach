import React from 'react';

function FilterCocktails(): JSX.Element {
  return (
    <div className="FilterCocktails">
        <p>Фильтр</p>
        <div className="container_filter">
          <div className="filter">
            <div className="filter-item">
              <select>
                
                <option hidden>Вкусы</option>
                <option value={}></option>
                <option value={}></option>
              </select>
            </div>
          </div>
        </div>
    </div>
  );
}

export default FilterCocktails;
