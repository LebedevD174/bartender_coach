import type { Drink } from "../../Drinks/types/drink";

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

export type Formula = {
  id: number;
  cocktail_id: number;
  barware_id: number;
  drink_id: number;
  drinks_volume: number;
  tech_id: number,
  ingredient_id: number,
  ingredient_volume: number,
  order: number,
  Barware: Barware,
  Ingredient: Ingredient,
  Drink: Drink,
}

export type Barware = {
  id: number,
  title: string,
  description: string,
  img: string,
}

export type Ingredient = {
  id: number,
  title: string,
  measure: string,
  img: string,
}

export type CocktailFormula = Cocktail & {
  Formula: Formula[]
}