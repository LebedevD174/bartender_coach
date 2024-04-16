import type { Barware } from '../../Barware/types/barware';
import type { Drink } from '../../Drinks/types/drink';
import type { Ingredient } from '../../Ingredient/types/ingredient';
import type { Tech } from '../../Tech/types/tech';

export type Cocktail = {
  id: number;
  title: string;
  img: string;
  description: string;
  user_id: number;
  status: boolean;
  category_id: number;
  CocktailFeatures: CocktailFeature[];
};

export type CocktailNew = Omit<Cocktail, 'id' | 'status' | 'CocktailFeatures'>;

export type CocktailID = Cocktail['id'];

export type CocktailType = {
  cocktail: Cocktail | null;
  cocktails: Cocktail[];
  error: string | undefined;
};

export type CocktailFeature = {
  id: number;
  cocktail_id: number;
  feature_id: number;
};

export type Formula = {
  id: number;
  cocktail_id: number;
  barware_id: number;
  drink_id: number;
  drinks_volume: number;
  tech_id: number;
  ingredient_id: number;
  ingredient_volume: number;
  order: number;
  Barware: Barware;
  Ingredient: Ingredient;
  Drink: Drink;
  Tech: Tech;
};



export type CocktailFormula = Cocktail & {
  Formula: Formula[];
};

