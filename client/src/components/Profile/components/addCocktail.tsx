import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import type { User } from '../../Auth/types/User';
import { addCocktail } from '../../Cocktails/cocktailsSlice';

function AddCardCocktail(): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [img, setImg] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [category_id, setCategory] = useState<string>('');

  const user: User | undefined = useAppSelector((store) => store.auth.user);

  const dispatch = useAppDispatch();

  const addCocktailForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData();
    if (img) {
      formData.append('img', img);
    }
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category_id', category_id);
    formData.append('user_id', user?.id.toString() || '');
    dispatch(addCocktail(formData)).catch(console.log);
  };

  return (
    <div className="AddCardCocktail">
      <h1 className="titleForm">Добавить новый коктейль</h1>
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
            <option value={2}>Крепкие</option>
            <option value={3}>Слабоалкогольные</option>
          </select>
        </div>
        <div>
          <label htmlFor="img">Фото</label>
          {/* <input type="file" id="img" onChange={(e) => setImg(e.target.files[0])} /> */}
          <input
            type="file"
            id="img"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0];
                setImg(file);
              }
            }}
          />
        </div>
        <button className='btn-add-cocktail' type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddCardCocktail;
