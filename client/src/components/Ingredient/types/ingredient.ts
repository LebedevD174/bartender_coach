export type Ingredient = {
    id: number;
    title: string;
    measure: string;
    img: string;
  };

export type IngredientType = {
    ingredients: Ingredient[];
    error: string | undefined;
}