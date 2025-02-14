export type Drink = {
  id: number;
  title: string;
  description: string;
  img: string;
  category_id: number;
};

export type DrinkID = Drink['id'];

export type DrinkType = {
  drinks: Drink[];
  error: string | undefined;
};

export type DrinkParams = {
  drinkId: string;
};