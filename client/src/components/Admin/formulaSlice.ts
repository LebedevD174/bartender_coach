import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import type { Cocktail, CocktailNew, CocktailType } from './types/cocktail';
import { Formula } from '../Cocktails/types/cocktail';

const initialState: CocktailType = {
    formula: [],
    error: undefined,
};

export const loadFormula = createAsyncThunk('formulas/loadFormulas', () =>
  api.fetchFormulaLoad(),
);

export const loadFormulaID = createAsyncThunk('formulas/loadCocktailsId', (id: string) =>
  api.fetchFormulaLoadId(id),
);

export const addFormula = createAsyncThunk('formulas/addCocktail', (formulas: Formula[]) =>
  api.fetchFormulaAdd(formulas),
);

const cocktailsSlice = createSlice({
  name: 'formulas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFormula.fulfilled, (state, action) => {
        state.cocktails = action.payload.cocktails;
      })
      .addCase(loadFormula.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadFormulaID.fulfilled, (state, action) => {
        state.cocktail = action.payload.cocktails;
      })
      .addCase(loadFormulaID.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addFormula.fulfilled, (state, action) => {
        state.cocktails.push(action.payload.cocktail);
      })
      .addCase(addFormula.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default cocktailsSlice.reducer;
