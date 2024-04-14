import axios, { type AxiosResponse } from 'axios';
import type { UserWithoutId, User, UserAuth } from '../components/Auth/types/User';
import type { Cocktail } from '../components/Cocktails/types/cocktail';

// eslint-disable-next-line import/prefer-default-export
export const fetchRegistration = async (
  user: UserWithoutId,
): Promise<{ message: string; user: User }> => {
  const response: AxiosResponse<{ message: string; user: User }> = await axios.post(
    '/api/sign/registration',
    user,
  );
  return response.data;
};


export const fetchAuth = async (user:UserAuth): Promise<{ message: string, user: User }> => {
    const response: AxiosResponse<{ message: string, user: User }> = await axios.post("/api/sign/authorization", user);
    return response.data
}

export const fetchLogout = async (): Promise<{ message: string }>=> {
    const response: AxiosResponse<{ message: string}> = await axios.get("/api/sign/logout");
    return response.data
}



export const fetchCocktailsLoad = async (): Promise<{ message: string, cocktails: Cocktail[] }> => {
  const response: AxiosResponse<{ message: string, cocktails: Cocktail[] }> = await axios.get("/api/cocktails/");
    return response.data
};
