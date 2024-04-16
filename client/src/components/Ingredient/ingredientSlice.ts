import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import type { IngredientType } from './types/ingredient';


const initialState: IngredientType = {
  ingredients: [],
  error: undefined,
};

export const loadIngredient = createAsyncThunk('ingredient/loadIngredient', () =>
  api.fetchIngredientLoad(),
);

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadIngredient.fulfilled, (state, action) => {
        state.ingredients = action.payload.ingredient;
      })
      .addCase(loadIngredient.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default ingredientSlice.reducer;
