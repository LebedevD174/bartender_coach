import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import { loadFeatures } from '../features/featuresSlice';
import type { Feature } from '../features/types/features';
import SearchInput from '../../ui/SearchInput'; 

type FilterCocktailsProps = {
 setFilter: (filter: { feature: number; category: number }) => void;
 filter: { feature: number; category: number };
 onSearch: (query: string) => void; 
};

function FilterCocktails({ setFilter, filter, onSearch }: FilterCocktailsProps): JSX.Element {
 const dispatch = useAppDispatch();
 const features: Feature[] = useAppSelector((store) => store.features.features);

 useEffect(() => {
    if (features) {
      dispatch(loadFeatures()).catch(console.log);
    }
 }, [dispatch, features.length]);

 const onHandlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setFilter({ ...filter, feature: +id });
 };
 const onHandlerChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setFilter({ ...filter, category: +id });
 };

 return (
    <div className="FilterCocktails">
      <SearchInput onSearch={onSearch} /> 
      <p className="categoryFilt">Фильтр</p>
      <div className="container_filter">
        <div className="filter">
          <div className="filter-item">
            <select id="filter_category" onChange={onHandlerChange2}>
              <option hidden>Крепость</option>
              <option value={0}>Все</option>
              <option value={1}>Безалкогольные</option>
              <option value={2}>Слабоалкогольные</option>
              <option value={3}>Крепкие</option>
            </select>
          </div>
          <div className="filter-item">
            <select id="filter_features" onChange={onHandlerChange}>
              <option hidden>Вкусы</option>
              <option value={0}>Все вкусы</option>
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