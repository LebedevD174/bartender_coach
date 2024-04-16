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
    // консоль (formData);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    dispatch(addCocktail(formData)).catch(console.log);
  };

  return (
    <div className="AddCardCocktail">
      <form onSubmit={addCocktailForm}>
        <label htmlFor="title">Название</label>
        <input value={title} type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="img">Фото коктейля</label>
        <input type="file" id="img" onChange={(e) => setImg(e.target.files[0])} />
        <label htmlFor="description">Описание</label>
        <input
          value={description}
          type="text"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={category_id} onChange={(e) => setCategory(e.target.value)}>
          <option hidden>Крепость</option>
          <option value={1}>Безалкогольные</option>
          <option value={2}>Крепкие</option>
          <option value={3}>Слабоалкогольные</option>
        </select>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddCardCocktail;
