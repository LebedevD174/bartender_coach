import axios, { type AxiosResponse } from 'axios';
import type { UserWithoutId,  User, UserAuth } from '../components/Auth/types/User';
import { Profile, ProfileWithoutID, UserProfile } from '../components/Profile/types/Profile';
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


export const fetchUpdateProfile = async (profile:ProfileWithoutID, id: number): Promise<{ message: string, profile: Profile }> => {
    const response: AxiosResponse<{ message: string, profile: Profile }> = await axios.put(`/api/profile/${id}`, profile);
    if (response.data.message === "success") {
        return response.data
    } else {
        return response.data.message
    }
    
}

export const fetchLogout = async (): Promise<{ message: string }>=> {
    const response: AxiosResponse<{ message: string}> = await axios.get("/api/sign/logout");
    return response.data
}



export const fetchCoctailsLoad = async (): Promise<{ message: string; coctails: Cocktail }> => {};

