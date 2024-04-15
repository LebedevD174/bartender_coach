import React from 'react';

type FilterDrinksProps = {
  setFilter: (filter: { category: string }) => void;
};

function FilterDrinks({ setFilter }: FilterDrinksProps): JSX.Element {
  const onHandlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setFilter({ category: id });
  };

  return (
    <div className="FilterDrinks">
      <p>Фильтр</p>
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
