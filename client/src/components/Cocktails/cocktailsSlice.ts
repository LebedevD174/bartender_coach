import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import type { CocktailType } from './types/cocktail';

const initialState: CocktailType = {
  cocktail: null,
  cocktails: [],
  error: undefined,
};

type DeleteCocktailArgs = {
  id: string;
  user_id: string;
};
type DeleteCocktailResponse = {
  message: string;
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

export const deleteCocktail = createAsyncThunk<DeleteCocktailResponse, DeleteCocktailArgs>(
  'cocktails/deleteCocktail',
  ({ id, user_id }) => api.fetchCocktailDelete(id, user_id),
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
      })
      .addCase(deleteCocktail.fulfilled, (state, action) => {
        state.cocktails = state.cocktails.filter((cocktail) => cocktail.id !== action.payload.id);
      })
      .addCase(deleteCocktail.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default cocktailsSlice.reducer;
