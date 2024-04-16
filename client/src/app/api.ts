/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AxiosError } from 'axios';
import axios, { type AxiosResponse } from 'axios';
import type { UserWithoutId, User, UserAuth } from '../components/Auth/types/User';
import type { Profile, ProfileWithoutID } from '../components/Profile/types/Profile';
import type { Cocktail, Ingredient, Tech, CocktailNew, Formula, FormulaNew } from '../components/Cocktails/types/cocktail';
import type { Drink } from '../components/Drinks/types/drink';
import type { Feature } from '../components/Cocktails/features/types/features';
import type { Barware } from '../components/Barware/types/barware';

// eslint-disable-next-line import/prefer-default-export
export const fetchRegistration = async (
  user: UserWithoutId,
): Promise<{ message: string; user: User }> => {
  try {
    const response: AxiosResponse<{ message: string; user: User }> = await axios.post(
      '/api/sign/registration',
      user,
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.response.data.message);
  }
};

export const fetchAuth = async (user: UserAuth): Promise<{ message: string; user: User }> => {
  try {
    const response: AxiosResponse<{ message: string; user: User }> = await axios.post(
      '/api/sign/authorization',
      user,
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.response.data.message);
  }
};
export const fetchCheck = async (): Promise<{ message: string; user: User }> => {
  const response: AxiosResponse<{ message: string; user: User }> =
    await axios.get('/api/sign/check');
  return response.data;
};

export const fetchLogout = async (): Promise<{ message: string }> => {
  const response: AxiosResponse<{ message: string }> = await axios.get('/api/sign/logout');
  return response.data;
};

export const fetchLoadProfile = async (
  id: number,
): Promise<{ message: string; profile: Profile }> => {
  const response: AxiosResponse<{ message: string; profile: Profile }> = await axios.get(
    `/api/profile/${id}`
  );
  if (response.data.message === 'success') {
    return response.data;
  }
  return response.data.message;
};

export const fetchUpdateProfile = async (
  profile: FormData,
): Promise<{ message: string; profile: Profile }> => {
  const response: AxiosResponse<{ message: string; profile: Profile }> = await axios.put(
    `/api/profile/${profile.get('profileId')}`,
    profile,
  );
  if (response.data.message === 'success') {
    return response.data.profile;
  }
  return response.data.message;
};

export const fetchCocktailsLoad = async (): Promise<{ message: string; cocktails: Cocktail[] }> => {
  const response: AxiosResponse<{ message: string; cocktails: Cocktail[] }> =
    await axios.get('/api/cocktails/');
  return response.data;
};

export const fetchCocktailAdd = async (cocktail: FormData): Promise<{ message: string; cocktail: Cocktail }> => {
  const response: AxiosResponse<{ message: string; cocktail: Cocktail }> = await axios.post(
    '/api/cocktails/',
    cocktail,
  );
  // console.log(response.data.cocktail);
  
  return response.data;
};

export const fetchCocktailsLoadId = async (
  id: string,
): Promise<{ message: string; cocktails: Cocktail }> => {
  const response: AxiosResponse<{ message: string; cocktails: Cocktail }> = await axios.get(
    `/api/cocktails/${id}`,
  );

  return response.data;
};

export const fetchDrinksLoad = async (): Promise<{ message: string; drinks: Drink[] }> => {
  const response: AxiosResponse<{ message: string; drinks: Drink[] }> =
    await axios.get('/api/drinks/');
  return response.data;
};

export const fetchFeaturesLoad = async (): Promise<{ message: string; features: Feature[] }> => {
  const response: AxiosResponse<{ message: string; features: Feature[] }> =
    await axios.get('/api/features/');
  return response.data;
};

export const fetchBarwareLoad = async (): Promise<{ message: string; barware: Barware[] }> => {
  const response: AxiosResponse<{ message: string; barware: Barware[] }> =
    await axios.get('/api/barware/');
  return response.data;
};

export const fetchIngredientLoad = async (): Promise<{ message: string; ingredient: Ingredient[] }> => {
  const response: AxiosResponse<{ message: string; ingredient: Ingredient[] }> =
    await axios.get('/api/ingredient/');
  return response.data;
};

export const fetchTechLoad = async (): Promise<{ message: string; tech: Tech[] }> => {
  const response: AxiosResponse<{ message: string; tech: Tech[] }> =
    await axios.get('/api/tech/');
  return response.data;
};

export const fetchFormulaLoad = async (): Promise<{ message: string; formulas: Formula[] }> => {
  const response: AxiosResponse<{ message: string; formulas: Formula[] }> =
    await axios.get('/api/formula/');
  return response.data;
};

export const fetchFormulaAdd = async (formulas: FormulaNew[]): Promise<{ message: string; formulas: Formula[] }> => {
  const response: AxiosResponse<{ message: string; formulas: Formula[] }> =
    await axios.post('/api/formula/', formulas);
  return response.data;
};

