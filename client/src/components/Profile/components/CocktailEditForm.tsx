/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import type { RootState} from '../../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import type { User } from '../../Auth/types/User';
import type { Cocktail } from '../../Cocktails/types/cocktail';



function CocktailEditForm({ onSubmitSuccess }: { onSubmitSuccess: () => void }):JSX.Element {

 const cocktail: Cocktail | undefined = useAppSelector((store: RootState) => store.cocktails.cocktail);
 const user: User | undefined = useAppSelector((store: RootState) => store.auth.user);

 const [title, setTitle] = useState(cocktail ? cocktail.title : '');
 const [img, setImg] = useState<File | string | null>(cocktail ? cocktail.img : null);

 const dispatch = useAppDispatch();


 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  const data = new FormData();

  data.append('title', title);
  if (img) {
    data.append('img', img); 
  }
  data.append('profileId', user?.id.toString() || '');


  dispatch(profileUpdate(data))
    .then(() => {
      onSubmitSuccess();
      setTitle('');
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
      <button type="submit">Сохранить изменения</button>
    </form>
 );
}

export default CocktailEditForm;