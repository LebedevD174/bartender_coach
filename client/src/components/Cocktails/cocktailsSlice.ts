import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import type { CocktailType } from './types/cocktail';

const initialState: CocktailType = {
  cocktails: [],
  error: undefined,
};

export const loadCocktails = createAsyncThunk('cocktails/loadCocktails', () =>
  api.fetchCocktailsLoad(),
);

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCocktails.fulfilled, (state, action) => {
        state.cocktails = action.payload.cocktails;
      })
      .addCase(loadCocktails.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadCocktails.pending, (state, action) => {
      });
  },
});

export default cocktailsSlice.reducer;
