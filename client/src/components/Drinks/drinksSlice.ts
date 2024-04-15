import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import type { DrinkType } from './types/drink';

const initialState: DrinkType = {
  drinks: [],
  error: undefined,
};

export const loadDrinks = createAsyncThunk('drinks/loadDrinks', () => api.fetchDrinksLoad());
// export const loadDrink = createAsyncThunk('drinks/drinkid', () => api.fetchDrinkLoad());

const cocktailsSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload.drinks;
      })
      .addCase(loadDrinks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadDrinks.pending, (state, action) => {})
      // .addCase(loadDrink.fulfilled, (state, action) => {
      //   state.drink = action.payload.drink;
      // });
  },
});

export default cocktailsSlice.reducer;
