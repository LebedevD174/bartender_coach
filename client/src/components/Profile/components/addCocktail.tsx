/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import type { RootState} from '../../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import type { User } from '../../Auth/types/User';
import { addCocktail } from '../../Cocktails/cocktailsSlice';
import type { Feature } from '../../Cocktails/features/types/features';
import { loadFeatures } from '../../Cocktails/features/featuresSlice';

function AddCardCocktail({ onSubmitSuccess }: { onSubmitSuccess: () => void }): JSX.Element {
  const dispatch = useAppDispatch();
 const features: Feature[] = useAppSelector((store: RootState) => store.features.features);
  const [title, setTitle] = useState<string>('');
  const [img, setImg] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [category_id, setCategory] = useState<string>('');
  const [feature_id, setFeature] = useState<string>('');

  const user: User | undefined = useAppSelector((store) => store.auth.user);

  useEffect(() => {
    if (features) {
      dispatch(loadFeatures()).catch(console.log);
    }
 }, [dispatch, features.length]);

  const addCocktailForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!category_id) {
      alert('Пожалуйста, выберите крепость коктейля.');
      return;
    }
    if (!feature_id) {
      alert('Пожалуйста, выберите вкус коктейля.');
      return;
    }

    const formData = new FormData();
    if (img) {
      formData.append('img', img);
    }
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category_id', category_id);
    formData.append('feature_id', feature_id);
    formData.append('user_id', user?.id.toString() || '');
    dispatch(addCocktail(formData))
      .then(() => {
        onSubmitSuccess();
      })
      .catch(console.log);
  };

  return (
    <div className="AddCardCocktail">
      <form className="formAddCocktail" onSubmit={addCocktailForm}>
        <div>
          <label htmlFor="title">Название</label>
          <input value={title} type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Описание</label>
          <input
            value={description}
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Крепость</label>
          <select
            className="categorySelect"
            value={category_id}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option hidden>Выберите крепость</option>
            <option value={1}>Безалкогольные</option>
            <option value={2}>Слабоалкогольные</option>
            <option value={3}>Крепкие</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Вкус</label>
          <select
            className="categorySelect"
            value={feature_id}
            onChange={(e) => setFeature(e.target.value)}
          >
            <option hidden>Выберите вкус</option>
              <option value={0}>Все вкусы</option>
              {features.map((feature) => (
                <option key={feature.id} value={feature.id}>
                 {feature.title}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="img">Фото</label>
          <input
            type="file"
            className="file-input"
            id="img"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0];
                setImg(file);
              }
            }}
          />
        </div>
        <button className="btn-create-select add" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddCardCocktail;
