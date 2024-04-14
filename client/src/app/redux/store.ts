import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../components/Auth/authSlice';

import cocktailsSlice from '../../components/Cocktails/cocktailsSlice';
import drinksSlice from '../../components/Drinks/drinksSlice';

import profileSlice from '../../components/Profile/profileSlice';
import featuresSlice from '../../components/Cocktails/features/featuresSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    cocktails: cocktailsSlice,
    drinks: drinksSlice,
    profile: profileSlice,
    features: featuresSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
