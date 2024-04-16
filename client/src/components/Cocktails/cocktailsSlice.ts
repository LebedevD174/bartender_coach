import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import type { CocktailType } from './types/cocktail';

const initialState: CocktailType = {
  cocktail: {},
  cocktails: [],
  error: undefined,
};

export const loadCocktails = createAsyncThunk('cocktails/loadCocktails', () =>
  api.fetchCocktailsLoad(),
);

export const loadCocktailsID = createAsyncThunk('cocktails/loadCocktailsId', (id: string) =>
  api.fetchCocktailsLoadId(id),
);

export const addCocktail = createAsyncThunk('cocktails/addCocktail', (cocktail: FormData) =>
  api.fetchCocktailAdd(cocktail),
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
      .addCase(loadCocktailsID.fulfilled, (state, action) => {
        state.cocktail = action.payload.cocktails;
      })
      .addCase(loadCocktailsID.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addCocktail.fulfilled, (state, action) => {
        state.cocktails.push(action.payload.cocktail);
      })
      .addCase(addCocktail.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default cocktailsSlice.reducer;
