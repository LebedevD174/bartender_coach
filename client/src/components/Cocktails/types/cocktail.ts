export type Cocktail = {
  id: number;
  title: string;
  img: string;
  description: string;
  user_id: number;
  status: boolean;
};

export type CocktailID = Cocktail['id'];

export type CocktailType = {
  cocktails: Cocktail[];
  error: string | undefined;
};
