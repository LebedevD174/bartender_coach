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
  cocktail_id: number | null;
  barware_id: number | null;
  drink_id: number | null;
  drinks_volume: number | null;
  tech_id: number | null;
  ingredient_id: number | null;
  ingredient_volume: number | null;
  order: number | null;
  Barware: Barware;
  Ingredient: Ingredient;
  Drink: Drink;
  Tech: Tech;
};
export type FormulaNew = Omit<Formula, 'id' |'Barware' | 'Ingredient' | 'Drink' | 'Tech'>

export type FormulaType = {
  formulas: string | undefined;
  error: string | undefined;
}


export type CocktailFormula = Cocktail & {
  Formulas: Formula[];
};

