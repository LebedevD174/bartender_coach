import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import { loadFeatures } from '../features/featuresSlice';
import type { Feature } from '../features/types/features';

function FilterCocktails(): JSX.Element {
  const dispatch = useAppDispatch();
  const features: Feature[] = useAppSelector((store) => store.features.features);
  console.log(features);

  useEffect(() => {
    if (features) {
      dispatch(loadFeatures()).catch(console.log);
    }
  }, [dispatch, features.length]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const select = e.target.value;
    console.log(select);
  };
  return (
    <div className="FilterCocktails">
      <p>Фильтр</p>
      <div className="container_filter">
        <div className="filter">
          <div className="filter-item">
            <select id="filter_category" onChange={handleCategoryChange}>
              <option hidden>Крепость</option>
              <option value={1}>Безалкогольные</option>
              <option value={2}>Крепкие</option>
              <option value={3}>Слабоалкогольные</option>
            </select>
          </div>
          <div className="filter-item">
            <select id="filter_features" onChange={handleCategoryChange}>
              <option hidden>Вкусы</option>
              {features.map((feature) => (
                <option key={feature.id} value={feature.id}>
                  {feature.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCocktails;
