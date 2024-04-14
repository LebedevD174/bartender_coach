import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../components/Auth/authSlice';
import profileSlice from '../../components/Profile/profileSlice';

const store = configureStore({
 reducer: {
    auth: authSlice,
    profile: profileSlice,
 },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
 

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 