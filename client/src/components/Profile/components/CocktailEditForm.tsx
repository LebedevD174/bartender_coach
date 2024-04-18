/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import type { RootState} from '../../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import type { Cocktail } from '../../Cocktails/types/cocktail';
import { cocktailUpdate } from '../../Cocktails/cocktailsSlice';

function CocktailEditForm({ onSubmitSuccess, cocktailN}: { onSubmitSuccess: () => void, cocktailN:Cocktail  }):JSX.Element {

 const cocktail: Cocktail | undefined = useAppSelector((store: RootState) => store.cocktails.cocktail);
 
 const [title, setTitle] = useState(cocktail ? cocktail.title : cocktailN.title);
 const [description, setDescription] = useState(cocktail ? cocktail.description : '');
 const [img, setImg] = useState<File | string | null>(cocktail ? cocktail.img : null);

 useEffect(() => {
    if (cocktailN) {
      setTitle(cocktailN.title);
    }
 }, [cocktailN]);

 const dispatch = useAppDispatch();

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  const data = new FormData();

  data.append('title', title);
  data.append('description', description);
  if (img) {
    data.append('img', img); 
  }
  data.append('cocktailId', cocktailN.id.toString());


  dispatch(cocktailUpdate(data))
    .then(() => {
      onSubmitSuccess();
      setTitle('');
      setDescription('');
      setImg(null);
    })
    .catch((error) => {
      console.error('Ошибка при обновлении коктейля:', error);
    });
};


 return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="img">Фотография:</label>
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
      <br />
      <label htmlFor="title">Название:</label>
      <input
        type="text"
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="description">Описание:</label>
      <input
        type="text"
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Сохранить изменения</button>
    </form>
 );
}

export default CocktailEditForm;