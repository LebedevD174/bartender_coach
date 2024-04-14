import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';


const initialState: IngredientType = {
  ingredient: [],
  error: undefined,
};

export const loadIngredients = createAsyncThunk('drinks/loadDrinks', () =>
  api.fetchDrinksLoad(),
);

const cocktailsSlice = createSlice({
  name: 'ingredients',
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
      .addCase(loadDrinks.pending, (state, action) => {});
  },
});

export default cocktailsSlice.reducer;
